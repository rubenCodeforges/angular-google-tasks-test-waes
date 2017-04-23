import {Component} from "@angular/core";
import {TaskListModel} from "../services/TasklistModel";
import * as _ from "lodash";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TasklistCreateModalComponent} from "../modal/TasklistCreateModalComponent";

@Component({
    selector: 'tasklist-action-buttons',
    template: require('./tasklistActionButtons.html'),
    styles: [require('./tasklistActionButtons.less')]
})
export class TasklistActionButtons {

    constructor(private model: TaskListModel,
                private modalService: NgbModal) {

    }

    public isTasklistSelected(): boolean {
        return !_.isEmpty(this.model.getCurrentTasklist());
    }

    public create() {
        this.modalService.open(TasklistCreateModalComponent);
    }

    public update() {

    }

    public delete() {

    }
}