import { Component } from '@angular/core';

@Component({
    selector: 'aqu',
    templateUrl: 'app/main/main.html',
    styleUrls: ['app/main/main.css']
})
export class MainComponent {

    showPrint = false;
    showInfo = false;
    image: HTMLImageElement = undefined;

    preparePrint() {        
        this.image = paper.view.element.toDataURL("image/png");
        this.showPrint = true;
    }

    hidePrint() {
        this.showPrint = false;
    }

    prepareInfo() {
        this.showInfo = true;
    }

    closeInfo() {
        this.showInfo = false;
    }
}
