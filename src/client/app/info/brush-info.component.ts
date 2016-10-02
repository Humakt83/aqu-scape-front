import { Component, Input } from '@angular/core';

@Component({
    selector: 'brush-info',
    templateUrl: 'app/info/brush-info.html',
    styleUrls: ['app/info/info.css']
})
export class BrushInfoComponent {

    @Input() brush: any;
}
