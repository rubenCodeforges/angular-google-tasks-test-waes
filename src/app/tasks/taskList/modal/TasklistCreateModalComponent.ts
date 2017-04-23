import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormService} from "../../../infrastructure/form/FormService";
import {FormControl, FormGroup} from "@angular/forms";
import {TaskListModel} from "../services/TasklistModel";
import {Tasklist} from "../services/TasklistResource";

@Component({
    selector: 'tasklist-create-modal',
    template: require('./tasklistCreateModal.html')
})
export class TasklistCreateModalComponent {

    public newTasklist: Tasklist = <Tasklist> {};

    constructor(private activeModal: NgbActiveModal,
                private model: TaskListModel) {
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
            return;
        }
        this.model.createTasklist(this.newTasklist).subscribe(() => {
            this.onClose();
        });
    }

    public onClose() {
        this.model.loadTasklist();
        this.activeModal.close();
    }


    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        return FormService.hasError(formControl, errorType);
    }
}