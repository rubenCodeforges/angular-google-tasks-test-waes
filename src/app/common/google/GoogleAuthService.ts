import {Injectable} from "@angular/core";
import {GoogleApiConfig} from "../../config/GoogleApiConfig";
import {Observable} from "rxjs";
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable()
export class GoogleAuthService {
    private GoogleAuth: GoogleAuth = undefined;

    constructor() {
        this.loadGapiAuth().subscribe(auth => this.GoogleAuth = auth);
    }

    /**
     * Init the gapi auth
     */
    public loadGapiAuth(): Observable<GoogleAuth> {
        return Observable.create((observer) => {
            gapi.load('auth2', () => {
                let auth = gapi.auth2.init(GoogleApiConfig.getConfig());
                observer.next(auth);
                return auth;
            });
        });

    }

    public getAuth(): Observable<GoogleAuth> {
        if (!this.GoogleAuth) {
            return this.loadGapiAuth();
        }
        return Observable.of(this.GoogleAuth);
    }
}