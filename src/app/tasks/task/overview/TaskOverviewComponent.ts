import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TaskListModel} from "../../taskList/services/TasklistModel";
import {Task} from "app/tasks/task/services/TaskResource";
import {TaskModel} from "../services/TaskModel";

@Component({
    selector: 'task-overview',
    template: require('./taskOverview.html'),
    styles: [require('./taskOverview.less')]
})
export class TaskOverviewComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private taskModel: TaskModel,
                private tasklistModel: TaskListModel) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            this.tasklistModel.setCurrentTasklistId(param['listId']);
            this.taskModel.loadTasks();
        });
    }

    public getLoadedTasks(): Task[] {
        return this.taskModel.getLoadedTasks();
    }

    public isCompleted(task: Task): any {
        return {'completed': task.completed}
    }
}
