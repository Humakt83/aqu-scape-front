import { Component, Input } from '@angular/core';
import { Dimension } from '../shared/index';

@Component({
    selector: 'dimension-info',
    templateUrl: 'app/info/dimension-info.html',
})
export class DimensionInfoComponent {

    @Input() dimension: Dimension;
}
