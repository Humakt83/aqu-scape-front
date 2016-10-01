import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MainComponent }   from './main/main.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';

@NgModule({
    declarations: [MainComponent, CanvasComponent, DrawingAreaComponent],
    imports:      [BrowserModule, HttpModule],
    bootstrap:    [MainComponent],
})
export class AppModule {}