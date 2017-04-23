import {Injectable} from "@angular/core";
import {Tasklist, TaskListResource} from "./TasklistResource";
import {Observable} from "rxjs";

@Injectable()
export class TaskListModel {
    private currentTasklist: Tasklist = undefined;
    private tasklists: Tasklist[] = [];

    constructor(private resource: TaskListResource) {
    }

    loadTasklist() {
        this.getAllTasklists().subscribe(tasklists => this.tasklists = tasklists);
    }

    getLoadedTasklists(): Tasklist[] {
        return this.tasklists;
    }

    setCurrentTasklist(tasklist: Tasklist) {
        this.currentTasklist = tasklist;
    }

    getCurrentTasklist() {
        return this.currentTasklist;
    }

    getAllTasklists(): Observable<Tasklist[]> {
        return this.resource.findAll().map((res) => res.items);
    }

    getTasklist(id: string): Observable<Tasklist> {
        return this.resource.findById(id);
    }

    createTasklist(tasklist: Tasklist): Observable<Tasklist> {
        return this.resource.create(tasklist);
    }

    updateTasklist(tasklist: Tasklist): Observable<Tasklist> {
        return this.resource.update(tasklist);
    }

    deleteTasklist(id: string): Observable<void> {
        return this.resource.delete(id);
    }
}