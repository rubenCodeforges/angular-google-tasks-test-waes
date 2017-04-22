import {NgModule} from "@angular/core";
import {TaskListComponent} from "./taskList/TaskListComponent";
import {TaskListResource} from "./taskList/services/TasklistResource";
import {TaskListModel} from "./taskList/services/TasklistModel";
import {BrowserModule} from "@angular/platform-browser";
import {TranslateModule} from "@ngx-translate/core";
import {TaskOverviewComponent} from "./task/overview/TaskOverviewComponent";
import {TaskDetailComponent} from "./task/detail/TaskDetailComponent";
import {RouterModule} from "@angular/router";
import {TasksRoutes} from "./TasksRouting";

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule,
        RouterModule.forChild(TasksRoutes)
    ],
    declarations: [
        TaskListComponent,
        TaskOverviewComponent,
        TaskDetailComponent
    ],
    exports: [
        TaskListComponent
    ],
    providers: [
        TaskListResource,
        TaskListModel
    ]
})
export class TasksModule {

}