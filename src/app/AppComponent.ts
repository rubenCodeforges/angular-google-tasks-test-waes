import {Component, AfterViewInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {GapiAuthInitConfig} from "./config/GapiAuthInitConfig";
import {GoogleApi} from "./config/GoogleApi";

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styles: [require('./app.less')]
})
export class AppComponent implements AfterViewInit {
    private GoogleAuth: any;
    private gapiConfig: GapiAuthInitConfig;

    constructor(translate: TranslateService) {
        translate.setDefaultLang('eng');
        this.gapiConfig = new GoogleApi().getConfig();
    };

    ngAfterViewInit(): void {
        gapi.load('auth2', () => {
            this.GoogleAuth = this.initGoogleApiAuth();
            console.log(this.GoogleAuth.currentUser.get());
            return this.GoogleAuth;
        });
    }

    public login() {
        console.log(this.GoogleAuth.currentUser.get());
    }

    private initGoogleApiAuth() {
        return gapi.auth2.init(this.gapiConfig)
    }
}
