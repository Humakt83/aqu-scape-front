import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plant } from '../objects/plant';

@Injectable()
export class BrushTool {

    brush: BehaviorSubject<any> = new BehaviorSubject(undefined);

    stoneBrush() {
        this.brush.next({customType: 'stone', color: 'rgb(150, 150, 150)', textColor: {'color': 'white'}, backgroundColor: {'background-color': 'rgb(150, 150, 150)'}, diameter: 5});
    }

    treeBrush() {
        this.brush.next({customType: 'tree', color: 'rgb(170, 80, 80)', textColor: {'color': 'white'}, backgroundColor: {'background-color': 'rgb(170, 80, 80)'}, diameter: 5});
    }

    plantBrush(plant: Plant) {
        this.brush.next(plant);
    }

}