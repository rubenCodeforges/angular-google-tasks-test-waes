import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormService} from "../../../infrastructure/form/FormService";
import {FormControl, FormGroup} from "@angular/forms";
import {TaskListModel} from "../services/TasklistModel";
import {Tasklist} from "../services/TasklistResource";
import * as _ from "lodash";

@Component({
    selector: 'tasklist-edit-modal',
    template: require('./tasklistEditModal.html')
})
export class TasklistEditModalComponent {

    public tasklist: Tasklist;

    constructor(private activeModal: NgbActiveModal,
                private model: TaskListModel) {
        this.tasklist = _.find(this.model.getLoadedTasklists(), (tasklist) => {
            return tasklist.id == this.model.getCurrentTasklistId();
        })
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
            return;
        }
        this.model.updateTasklist(this.tasklist).subscribe(() => {
            this.onClose();
        });
    }

    public onClose() {
        this.activeModal.close();
    }


    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        return FormService.hasError(formControl, errorType);
    }
}