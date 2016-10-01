import { Injectable } from '@angular/core';
import { Plant } from '../objects/plant';
import { DimensionService, Dimension } from './dimensions.service';

@Injectable()
export class GraphicsService {

    private dimension: Dimension;

    constructor(private dimensionService: DimensionService) {
        dimensionService.dimension.subscribe(
            result => this.dimension = result
        );
    }

    drawEllipseFittingCanvasAndDimension(point: any, diameter: number, color: any): any {
        var size = new paper.Size(this.scaleDepthToFittingDimensions(diameter), this.scaleWidthToFittingDimensions(diameter))
        point.x = point.x - (size.width / 2);
        point.y = point.y - (size.height / 2);
        var rectangle = new paper.Rectangle(point, size);
        var ellipse = new paper.Path.Ellipse(rectangle);
        ellipse.fillColor = color;
        ellipse.strokeColor = 'black';
        return ellipse;
    }

    assignColorPropertiesToPlants(plantArray: Plant[]) {
        plantArray.forEach(plant => {
            do var color = this.randomColorTiltedGreen();
            while (this.colorClashes(color, plantArray));
            let textColor = this.textColorFittingBackground(color);
            plant.randomColor = color;
            plant.color = 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')';
            plant.backgroundColor = {'background-color': 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')'};
            plant.textColor = {'color': textColor};
        });
    }

    private scaleWidthToFittingDimensions(diameter: number) {
        let multiplier = paper.view.bounds.width / this.dimension.width;
        return diameter * multiplier;
    }

    private scaleDepthToFittingDimensions(diameter: number): number {
        let multiplier = paper.view.bounds.height / this.dimension.depth;
        return diameter * multiplier;
    }

    private getSumOfColor(color: any): number {
        return color.red + color.green + color.blue;
    }

    private randomColorTiltedGreen(): any {
        let minimumGreen = 100;
        let green = Math.max(Math.floor(Math.random() * 255), minimumGreen);
        let red = Math.floor(Math.random() * green);
        let blue = Math.floor(Math.random() * green);
        return {green: green, red: red, blue: blue};
    }

    private colorClashes(color: any, plantArray: Plant[]) {
        for (let i = 0 ; i < plantArray.length; i++) {
            if (plantArray[i].randomColor && Math.abs(this.getSumOfColor(plantArray[i].randomColor) - this.getSumOfColor(color)) < 30) {
                return true;
            }
        }; 
        return false;
    }

    private textColorFittingBackground(color: any): string {
        if (this.getSumOfColor(color) > 350) {
            return 'black';
        } else {
            return 'white';
        }
    }
}