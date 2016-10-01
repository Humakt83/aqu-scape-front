import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CanvasComponent } from '../canvas/canvas.component';
import { DrawingAreaComponent } from '../drawing-area/drawing-area.component';
import { PlantService } from '../shared/index';

@Component({
    selector: 'aqu',
    templateUrl: 'app/main/main.html',
    providers: [ HttpModule, PlantService ],
    directives: [ CanvasComponent, DrawingAreaComponent ]
})
export class MainComponent {
}
