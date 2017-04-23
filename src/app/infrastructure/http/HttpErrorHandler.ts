import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {SecurityService} from "../../common/security/SecurityService";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpErrorHandler {

    constructor(private securityService: SecurityService) {
    }

    /**
     * TODO: SecurityService and auth errors handling
     * Simple handler , uses security to check if user is not authorized
     * @param response
     * @returns {any}
     */
    public handleError(response: Response): ErrorObservable {
        let errMsg: string = `${response.status} - ${response.statusText}`;
        let serverResponse: any = response.statusText == "OK" ? response.json() : {};

        this.securityService.denyAndRedirectOnAuthError(serverResponse);

        console.error(errMsg);
        return Observable.throw({message: errMsg, code: response.status, error: serverResponse})
    }
}