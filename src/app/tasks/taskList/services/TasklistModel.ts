import {Injectable} from "@angular/core";
import {TaskItem, TaskListResource} from "./TasklistResource";
import {Observable} from "rxjs";

@Injectable()
export class TaskListModel {

    constructor(private resource: TaskListResource) {
    }

    getAllTaskItems(): Observable<TaskItem[]> {
        return this.resource.findAll().map((list) => list.items);
    }
}