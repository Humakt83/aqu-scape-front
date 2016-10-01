import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MainComponent }   from './main/main.component';
import { PaletteComponent } from './palette/palette.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { PlantService } from './shared/index';

@NgModule({
    declarations: [MainComponent, PaletteComponent, DrawingAreaComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [MainComponent],
    providers: [HttpModule, PlantService]
})
export class AppModule {}