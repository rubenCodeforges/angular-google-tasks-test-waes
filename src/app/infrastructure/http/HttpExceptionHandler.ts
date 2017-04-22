import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

export class HttpExceptionHandler {

    public static handleError(response: Response): ErrorObservable {
        let errMsg: string = `${response.status} - ${response.statusText}`;
        let serverResponse: string = response.statusText == "OK" ? response.json() : {};
        console.error(errMsg);
        return Observable.throw({message: errMsg, code: response.status, serverMessage: serverResponse["message"]});
    }
}