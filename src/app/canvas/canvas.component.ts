import { Component, OnInit } from '@angular/core';
import { PlantService, Plant } from '../shared/index';

const minimumGreen = 100;

@Component({
    selector: 'canvas-of-objects',
    templateUrl: 'app/canvas/canvas.html',
    styleUrls: ['app/canvas/canvas.css']
})
export class CanvasComponent implements OnInit {

    plants: Plant[];

    constructor(private plantService: PlantService) {}

    ngOnInit() {
        this.plantService.getPlants().subscribe(
            (value: Plant[]) => this.plants = value, 
            (error: any) => console.error(error)
        );
    }

    randomColor(): string {
        const green = Math.max(Math.floor(Math.random() * 255), minimumGreen);
        const red = Math.floor(Math.random() * green);
        const blue = Math.floor(Math.random() * green);
        return `rgb(${red}, ${green}, ${blue})`
    }

}
