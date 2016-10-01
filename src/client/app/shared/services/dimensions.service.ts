import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DimensionService {

    dimension: BehaviorSubject<Dimension> = new BehaviorSubject(new Dimension(100, 60));

    setDimensions(width: number, depth: number) {
        this.dimension.next(new Dimension(width, depth));
    }

}

export class Dimension {
    constructor(public width: number, public depth: number) {        
    }
}