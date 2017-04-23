import {Injectable} from "@angular/core";
import {Tasklist, TaskListResource} from "./TasklistResource";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import * as _ from "lodash";

@Injectable()
export class TaskListModel {
    private currentTasklistId: string;
    private tasklists: Tasklist[] = [];

    constructor(private resource: TaskListResource,
                private router: Router) {
    }

    loadTasklist() {
        this.getAllTasklists().subscribe(tasklists => this.tasklists = tasklists);
    }

    addTasklist(tasklist: Tasklist) {
        this.tasklists.push(tasklist);
    }

    getLoadedTasklists(): Tasklist[] {
        return this.tasklists;
    }

    setCurrentTasklistId(tasklistId: string) {
        this.currentTasklistId = tasklistId;
    }

    getCurrentTasklistId(): string {
        return this.currentTasklistId;
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

    deleteCurrentTasklist(): void {
        this.resource.delete(this.currentTasklistId).subscribe(() => {
            _.remove(this.tasklists, (tasklist) => tasklist.id == this.currentTasklistId);
            this.currentTasklistId = undefined;
            this.router.navigateByUrl("");
        });
    }
}