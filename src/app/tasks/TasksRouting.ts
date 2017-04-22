import {Route} from "@angular/router";
import {TaskOverviewComponent} from "./task/overview/TaskOverviewComponent";
import {TaskDetailComponent} from "./task/detail/TaskDetailComponent";

export const TasksRoutes: Route[] = [
    {path: 'taskList/:listId', component: TaskOverviewComponent},
    {path: 'taskList/:listId/task/:id', component: TaskDetailComponent},
];