import { Component } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { DrawingAreaComponent } from '../drawing-area/drawing-area.component';
import { PlantService } from '../shared/index';

@Component({
  selector: 'aqu',
  templateUrl: 'main/main.html',
  providers: [ PlantService ],
  directives: [ CanvasComponent, DrawingAreaComponent ]
})
export class MainComponent {
}
