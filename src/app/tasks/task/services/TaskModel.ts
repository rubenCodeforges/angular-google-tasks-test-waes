import {Injectable} from "@angular/core";
import {Task, TaskResource} from "./TaskResource";
import {Observable} from "rxjs";
import {TaskListModel} from "../../taskList/services/TasklistModel";

@Injectable()
export class TaskModel {
    private tasks: Task[] = [];

    constructor(private taskListModel: TaskListModel,
                private resource: TaskResource) {
    }

    loadTasks() {
        this.getAllTasks().subscribe(tasks => this.tasks = tasks);
    }

    getLoadedTasks(): Task[] {
        return this.tasks;
    }

    getAllTasks(): Observable<Task[]> {
        return this.resource.findAll(
            this.taskListModel.getCurrentTasklistId()
        ).map((res) => res.items);
    }

    getTask(id: string): Observable<Task> {
        return this.resource.findById(this.taskListModel.getCurrentTasklistId(), id);
    }

    createTask(task: Task): Observable<Task> {
        return this.resource.create(this.taskListModel.getCurrentTasklistId(), task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.resource.update(this.taskListModel.getCurrentTasklistId(), task);
    }

    deleteTask(id: string): Observable<void> {
        return this.resource.delete(this.taskListModel.getCurrentTasklistId(), id);
    }
}