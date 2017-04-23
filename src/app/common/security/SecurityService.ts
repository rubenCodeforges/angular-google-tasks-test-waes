import {Injectable} from "@angular/core";
import {UserService} from "../user/UserService";
import {AbstractHttpError} from "../../infrastructure/http/AbstractHttpError";
import {GoogleHttpErrorBody} from "../google/GoogleHttpError";
import * as _ from "lodash";
import {Router} from "@angular/router";

@Injectable()
/**
 * Security service used for security check and redirects
 * TODO: Rework
 */
export class SecurityService {
    constructor(private userService: UserService,
                private router: Router) {
    }

    public denyAndRedirectOnAuthError(errorBody: GoogleHttpErrorBody) {
        _.each(errorBody.error.errors, (error) => {
            if (error.reason == "authError") {
                this.userService.signOut();
                this.router.navigateByUrl('');
            }
        });
    }
}