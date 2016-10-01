import { Component, OnInit } from '@angular/core';
import { PlantService, Plant } from '../shared/index';
import { BrushTool } from '../shared/index';

@Component({
    selector: 'canvas-of-objects',
    templateUrl: 'app/palette/palette.html',
    styleUrls: ['app/palette/palette.css']
})
export class PaletteComponent implements OnInit {

    plants: Plant[];

    constructor(private plantService: PlantService, private brushTool: BrushTool) {}

    ngOnInit() {
        this.plantService.getPlants().subscribe(
            (value: Plant[]) => this.plants = value, 
            (error: any) => console.error(error)
        );
    }

    stoneBrush() {
        this.brushTool.stoneBrush();
    }

    treeBrush() {
        this.brushTool.treeBrush();
    }

    plantBrush(plant: Plant) {
        this.brushTool.plantBrush(plant);
    }

}
