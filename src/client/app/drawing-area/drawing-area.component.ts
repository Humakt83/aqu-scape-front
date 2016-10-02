import { Component, OnInit } from '@angular/core';
import { BrushTool, GraphicsService, UndoRedoTool, ClearTool } from '../shared/index';

@Component({
    selector: 'drawing-area',
    templateUrl: 'app/drawing-area/drawing-area.html',
    styleUrls: ['app/drawing-area/drawing-area.css']
})
export class DrawingAreaComponent implements OnInit {

    drawnPlants: any[] = [];
    selectedItem: any;
    brush: any;

    constructor(private brushTool: BrushTool, private graphicsService: GraphicsService, private undoRedoTool: UndoRedoTool, private clearTool: ClearTool) {}

    ngOnInit() {
        this.brushTool.brush.subscribe(result => this.brush = result);
        this.undoRedoTool.undoRedoOccurred.subscribe(result => this.goThroughDrawnPlants());
        this.clearTool.clearActivated.subscribe(result => {
            this.selectedItem = undefined;
            this.drawnPlants = [];
        });
        this.initCanvas();
    }

    private initCanvas() {
        var canvas = document.getElementById('drawingCanvas');        
        paper.setup(canvas);
        paper.view.draw();
        paper.view.onMouseDown = ((event: any) => {            
            if (!this.brush) return;
            var ellipse = this.graphicsService.drawEllipseFittingCanvasAndDimension(event.point, this.brush.diameter, this.brush.color);
            ellipse.onMouseDown = ((event: any) => {
                event.preventDefault();
                event.stopPropagation();
                ellipse.strokeColor = 'yellow';
                this.selectedItem = ellipse;
            });
            if(this.brush.customType) {
                ellipse.customType = true;
                this.selectedItem = ellipse;
                ellipse.strokeColor = 'yellow';
            } else {
                this.drawnPlants.push(ellipse);
                ellipse.plant = this.brush;
                let text = new paper.PointText(ellipse.position);
                text.justification = 'center';
                text.fillColor = this.brush.textColor;
                text.content = this.brush.identificationNumber;
                ellipse.text = text;
                this.goThroughDrawnPlants();
            }
            ellipse.originalPosition = ellipse.position;         
            this.undoRedoTool.clearRedoStack();
            this.undoRedoTool.pushToActionStack(ellipse, this.undoRedoTool.addAction());            
            paper.view.draw();
        });
        paper.view.onMouseDrag = ((event: any) => {
            let item = this.selectedItem;
            if (!item) return;
            if (item.customType && !item.resized) {
                if (event.point.y <= item.bounds.topLeft.y || event.point.x <= item.bounds.topLeft.x) item.bounds.topLeft = event.point;
                else item.bounds.bottomRight = event.point;
            } else {
                item.position = event.point;
                if (item.text) item.text.position = event.point;
            }
        });
        paper.view.onMouseUp = ((event: any)=> {
            let item = this.selectedItem;
            if (!item || item.strokeColor === 'yellow') return;
            item.strokeColor = 'black';
            if (!item.customType || item.resized) {
                this.undoRedoTool.clearRedoStack();            
                let previousPosition = item.originalPosition;
                let newPosition = event.point.x;            
                item.position = event.point;
                this.undoRedoTool.pushToActionStack(item, this.undoRedoTool.moveAction(), previousPosition, newPosition);
                item.originalPosition = item.position;
            }
            if (!item.customType) this.goThroughDrawnPlants();            
            item.resized = true;
            this.selectedItem = undefined;
        });
    }

    private goThroughDrawnPlants() {
        let visiblePlants = this.drawnPlants.filter((plant: any) => plant.opacity === 1);
        visiblePlants.forEach((ellipse: any) => {            
            if (this.isShadowed(ellipse, visiblePlants)) {
                ellipse.fillColor = 'red';
            } else {
                ellipse.fillColor = ellipse.plant.color;
            }         
        });
    }

    private isShadowed(ellipse: any, visiblePlants: any[]): boolean {
        for (var i = 0; i < visiblePlants.length; i++) {
            let ellipseToCompare = visiblePlants[i];
            if (ellipse !== ellipseToCompare && (ellipse.intersects(ellipseToCompare) || ellipseToCompare.contains(ellipse.position))) {
                if (ellipse.plant.height < ellipseToCompare.plant.height) {
                    return true;
                }
            }
        }
        return false;
    }

}
