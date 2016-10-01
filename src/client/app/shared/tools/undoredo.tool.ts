import { Injectable } from '@angular/core';

@Injectable()
export class UndoRedoTool {

    private actionStack: any[] = [];
    private currentUndoIndex: number = 0;
    actionTypeMove = 'move';
    actionTypeAdd = 'add';

    moveAction() {
        return this.actionTypeMove;
    }
    
    addAction() {
        return this.actionTypeAdd;
    }
    
    reset() {
        this.actionStack = [];
        this.currentUndoIndex = 0;
    }
    
    undo() {
        if (this.actionStack.length < 1 || this.currentUndoIndex < 0) return;
        if (this.actionStack[this.currentUndoIndex].action === 'move') {
            this.actionStack[this.currentUndoIndex].item.position = this.actionStack[this.currentUndoIndex].previousPosition;
            if (this.actionStack[this.currentUndoIndex].item.text) this.actionStack[this.currentUndoIndex].item.text.position = this.actionStack[this.currentUndoIndex].previousPosition;
        } else {
            this.actionStack[this.currentUndoIndex].item.opacity = '0';
            if (this.actionStack[this.currentUndoIndex].item.text) this.actionStack[this.currentUndoIndex].item.text.opacity = '0';
        }        
        this.currentUndoIndex -= 1;
        paper.view.draw();
    }

    redo() {
        if (this.actionStack.length < 1 || !this.actionStack[this.currentUndoIndex + 1]) return;
        this.currentUndoIndex = this.currentUndoIndex + 1;
        if (this.actionStack[this.currentUndoIndex].action === 'move') {
            this.actionStack[this.currentUndoIndex].item.position = this.actionStack[this.currentUndoIndex].newPosition;
            if (this.actionStack[this.currentUndoIndex].item.text) this.actionStack[this.currentUndoIndex].item.text.position = this.actionStack[this.currentUndoIndex].newPosition;
        } else {
            this.actionStack[this.currentUndoIndex].item.opacity = '1';
            if (this.actionStack[this.currentUndoIndex].item.text) this.actionStack[this.currentUndoIndex].item.text.opacity = '1';
        }
        paper.view.draw();
    }
    pushToActionStack(item: any, action: string, previousPosition: any, newPosition: any) {
        this.actionStack.push({item: item, action: action, previousPosition: previousPosition, newPosition: newPosition});
        this.currentUndoIndex = this.actionStack.length -1;
    }
    
    clearRedoStack() {
        for (; this.currentUndoIndex < this.actionStack.length - 1;) {
            this.actionStack.pop();
        }
    }

}