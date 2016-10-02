import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DimensionService {

    dimension: BehaviorSubject<Dimension> = new BehaviorSubject(new Dimension(100, 60));

    setDimensions(width: number, depth: number) {
        this.dimension.next(new Dimension(width, depth));
    }

}

/**
 * Dimension of the aquarium representing aquarium floor
 */
export class Dimension {
    constructor(public width: number, public depth: number) {        
    }
}