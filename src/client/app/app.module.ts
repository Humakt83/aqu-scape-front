import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MainComponent }   from './main/main.component';
import { PaletteComponent } from './palette/palette.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { PlantService, UndoRedoTool, DimensionService, GraphicsService, BrushTool, ClearTool } from './shared/index';
import { InfoComponent } from './info/info.component';
import { BrushInfoComponent } from './info/brush-info.component';
import { DimensionInfoComponent } from './info/dimension-info.component';
import { ToolsComponent } from './tools/tools.component';
import { PrintComponent } from './print/print.component';

@NgModule({
    declarations: [MainComponent, PaletteComponent, DrawingAreaComponent, InfoComponent, DimensionInfoComponent, BrushInfoComponent, ToolsComponent, PrintComponent],
    imports: [BrowserModule, HttpModule, FormsModule],
    bootstrap: [MainComponent],
    providers: [HttpModule, PlantService, UndoRedoTool, DimensionService, GraphicsService, BrushTool, ClearTool]
})
export class AppModule {}