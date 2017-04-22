import {Component} from "@angular/core";
import {TaskItem} from "./services/TasklistResource";
import {TaskListModel} from "./services/TasklistModel";

@Component({
    selector: 'task-list',
    template: require('./taskList.html')
})
export class TaskListComponent {
    public taskItems: TaskItem[] = [];

    constructor(private model: TaskListModel) {
        this.model.getAllTaskItems().subscribe((items) => {
            this.taskItems = items;
        });
    }
}