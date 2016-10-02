import { Component, Input } from '@angular/core';
import { Dimension } from '../shared/index';

@Component({
    selector: 'dimension-info',
    templateUrl: 'app/info/dimension-info.html',
    styleUrls: ['app/info/info.css']
})
export class DimensionInfoComponent {

    @Input() dimension: Dimension;
}
