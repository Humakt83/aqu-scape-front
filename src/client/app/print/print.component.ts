import { Component, OnInit, Input } from '@angular/core';
import { PlantService, Plant } from '../shared/index';
import { BrushTool } from '../shared/index';

@Component({
    selector: 'print',
    templateUrl: 'app/print/print.html',
    styleUrls: ['app/print/print.css']
})
export class PrintComponent implements OnInit {

    plants: Plant[];
    @Input() canvasImage: HTMLImageElement;

    constructor(private plantService: PlantService, private brushTool: BrushTool) {}

    ngOnInit() {
        this.plantService.getPlants().subscribe(
            (value: Plant[]) => this.plants = value, 
            (error: any) => console.error(error)
        );
    }

}