import {Route} from "@angular/router";
import {TaskOverviewComponent} from "./task/overview/TaskOverviewComponent";
import {TaskDetailComponent} from "./task/detail/TaskDetailComponent";
import {AuthGuard} from "../common/security/AuthGuard";

export const TasksRoutes: Route[] = [
    {
        path: 'taskList/:listId',
        component: TaskOverviewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'taskList/:listId/task/:id',
        component: TaskDetailComponent,
        canActivate: [AuthGuard]
    },
];
