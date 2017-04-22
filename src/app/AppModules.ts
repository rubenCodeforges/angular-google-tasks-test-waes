import {NgModule} from "@angular/core";
import {AppComponent} from "./AppComponent";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./AppRoutes";
import {VehiclesModule} from "./vehicles/VehiclesModule";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http, HttpModule} from "@angular/http";
import {PartsManagerModule} from "./partsManager/PartsManagerModule";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppCommonModule} from "./common/AppCommonModule";
import {LoginComponent} from "./login/LoginComponent";
import {HttpService} from "./infrastructure/http/HttpService";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        NgbModule.forRoot(),
        AppCommonModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    exports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        TranslateModule,
        RouterModule
    ],
    providers: [
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}