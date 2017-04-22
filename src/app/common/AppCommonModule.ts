import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {SidebarComponent} from "./sidebar/SidebarComponent";
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TranslateModule} from "@ngx-translate/core";
import {UserService} from "./user/UserService";
import {GoogleAuthService} from "./google/GoogleAuthService";
import {BrowserModule} from "@angular/platform-browser";
import {TasksModule} from "../tasks/TasksModule";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule,
        TasksModule
    ],
    declarations: [
        SidebarComponent,
        ToolbarComponent,
        ErrorPageComponent
    ],
    exports: [
        SidebarComponent,
        ToolbarComponent
    ],
    providers: [
        GoogleAuthService,
        UserService
    ]
})

export class AppCommonModule {
}
