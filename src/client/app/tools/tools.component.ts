import { Component } from '@angular/core';
import { UndoRedoTool, ClearTool } from '../shared/tools/index';

@Component({
    selector: 'tools',
    templateUrl: 'app/tools/tools.html',
    styleUrls: ['app/tools/tools.css']
})
export class ToolsComponent {

    constructor(private undoRedoTool: UndoRedoTool, private clearTool: ClearTool) {}

    undo() {
        this.undoRedoTool.undo();
    }

    redo() {
        this.undoRedoTool.redo();
    }

    clear() {
        this.clearTool.clear();
    }

}
