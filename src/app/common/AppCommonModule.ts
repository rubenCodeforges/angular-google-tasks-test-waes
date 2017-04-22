import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {SidebarComponent} from "./sidebar/SidebarComponent";
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TaskListComponent} from "./taskList/TaskListComponent";
import {TaskListModel} from "./taskList/services/TasklistModel";
import {TaskListResource} from "./taskList/services/TasklistResource";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    imports: [
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule
    ],
    declarations: [
        SidebarComponent,
        ToolbarComponent,
        TaskListComponent,
        ErrorPageComponent
    ],
    exports: [
        SidebarComponent,
        ToolbarComponent
    ],
    providers: [
        TaskListModel,
        TaskListResource
    ]
})

export class AppCommonModule {
}
