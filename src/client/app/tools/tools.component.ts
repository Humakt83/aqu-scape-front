import { Component } from '@angular/core';
import { UndoRedoTool, ClearTool, DimensionService } from '../shared/index';

@Component({
    selector: 'tools',
    templateUrl: 'app/tools/tools.html',
    styleUrls: ['app/tools/tools.css']
})
export class ToolsComponent {

    canvasDialogShown = false;
    width: number = 100;
    depth: number = 60;

    constructor(private undoRedoTool: UndoRedoTool, private clearTool: ClearTool, private dimensionsService: DimensionService) {}

    undo() {
        this.undoRedoTool.undo();
    }

    redo() {
        this.undoRedoTool.redo();
    }

    clear() {
        this.clearTool.clear();
    }

    newCanvasDialog() {
        this.canvasDialogShown = true;
    }

    closeCanvasDialog() {
        this.canvasDialogShown = false;
    }

    createNewCanvas(width: number, depth: number) {
        this.closeCanvasDialog();
        this.clear();
        this.dimensionsService.setDimensions(width, depth);
    }

}
