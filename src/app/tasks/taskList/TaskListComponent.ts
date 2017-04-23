import {Component} from "@angular/core";
import {TaskListModel} from "./services/TasklistModel";
import {Tasklist} from "./services/TasklistResource";

@Component({
    selector: 'tasklist',
    template: require('./taskList.html')
})
export class TaskListComponent {
    public taskItems: Tasklist[] = [];

    constructor(private model: TaskListModel) {
        this.model.getAllTasklists().subscribe((items) => {
            this.taskItems = items;
        });
    }
}