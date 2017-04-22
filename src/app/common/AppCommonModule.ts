import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {SidebarComponent} from "./sidebar/SidebarComponent";
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TranslateModule} from "@ngx-translate/core";
import {UserService} from "./user/UserService";
import {GoogleAuthService} from "./google/GoogleAuthService";
import {TaskListResource} from "./taskList/services/TasklistResource";
import {TaskListModel} from "./taskList/services/TasklistModel";
import {TaskListComponent} from "./taskList/TaskListComponent";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports: [
        BrowserModule,
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
        GoogleAuthService,
        TaskListResource,
        TaskListModel,
        UserService
    ]
})

export class AppCommonModule {
}
