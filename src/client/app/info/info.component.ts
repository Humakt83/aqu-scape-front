import { Component, OnInit } from '@angular/core';
import { DimensionService, Dimension, BrushTool } from '../shared/index';

@Component({
    selector: 'info',
    templateUrl: 'app/info/info.html',
})
export class InfoComponent implements OnInit {

    dimension: Dimension;
    selectedBrush: any;

    constructor(private dimensionService: DimensionService, private brushTool: BrushTool) {
    }

    ngOnInit() {
        this.dimensionService.dimension.subscribe(result => this.dimension = result);
        this.brushTool.brush.subscribe(result => this.selectedBrush = result);        
    }
}
