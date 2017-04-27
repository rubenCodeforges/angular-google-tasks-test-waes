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
import {SecurityService} from "./security/SecurityService";
import {AuthGuard} from "./security/AuthGuard";
import {DeleteConfirmationModal} from "./modal/DeleteConfirmationModal";
import {GoogleApiModule} from "ng-gapi/lib/GoogleApiModule";
import {GapiConfig} from "../config/GapiConfig";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule,
        GoogleApiModule.setConfig(new GapiConfig()),
        TasksModule
    ],
    declarations: [
        SidebarComponent,
        ToolbarComponent,
        ErrorPageComponent,
        DeleteConfirmationModal
    ],
    exports: [
        SidebarComponent,
        ToolbarComponent
    ],
    providers: [
        GoogleAuthService,
        SecurityService,
        AuthGuard,
        UserService
    ],
    entryComponents: [
        DeleteConfirmationModal
    ]
})

export class AppCommonModule {
}
