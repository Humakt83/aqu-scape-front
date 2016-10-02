import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UndoRedoTool } from './undoredo.tool';

@Injectable()
export class ClearTool {

    clearActivated: BehaviorSubject<any> = new BehaviorSubject(undefined);

    constructor(private undoRedoTool: UndoRedoTool) {}

    clear() {
        this.clearActivated.next(null);
        this.undoRedoTool.reset();
        paper.project.activeLayer.removeChildren();
        paper.view.draw();        
    }

}