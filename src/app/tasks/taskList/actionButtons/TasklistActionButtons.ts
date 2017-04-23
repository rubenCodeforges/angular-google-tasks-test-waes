import {Component} from "@angular/core";
import {TaskListModel} from "../services/TasklistModel";
import * as _ from "lodash";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TasklistCreateModalComponent} from "../modal/TasklistCreateModalComponent";
import {DeleteConfirmationModal} from "../../../common/modal/DeleteConfirmationModal";

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
        return !_.isEmpty(this.model.getCurrentTasklistId());
    }

    public create() {
        this.modalService.open(TasklistCreateModalComponent);
    }

    public update() {

    }

    public deleteTasklist() {
        this.modalService.open(DeleteConfirmationModal).result.then((res) => {
            if (res.confirmed) {
                this.model.deleteCurrentTasklist()
            }
        })
    }
}