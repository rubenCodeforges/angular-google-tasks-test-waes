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
import {TasklistActionButtons} from "./taskList/actionButtons/TasklistActionButtons";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TasklistCreateModalComponent} from "./taskList/modal/TasklistCreateModalComponent";
import {FormsModule} from "@angular/forms";
import {TasklistEditModalComponent} from "./taskList/modal/TasklistEditModalComponent";

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule,
        NgbModule,
        FormsModule,
        RouterModule.forChild(TasksRoutes)
    ],
    declarations: [
        TaskListComponent,
        TaskOverviewComponent,
        TaskDetailComponent,
        TasklistCreateModalComponent,
        TasklistEditModalComponent,
        TasklistActionButtons
    ],
    exports: [
        TaskListComponent,
        TasklistActionButtons
    ],
    providers: [
        TaskListResource,
        TaskListModel
    ],
    entryComponents: [
        TasklistCreateModalComponent,
        TasklistEditModalComponent
    ]
})
export class TasksModule {

}