import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MainComponent }   from './main/main.component';

@NgModule({
    declarations: [MainComponent],
    imports:      [BrowserModule, HttpModule],
    bootstrap:    [MainComponent],
})
export class AppModule {}