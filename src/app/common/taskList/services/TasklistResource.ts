import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpService} from "../../../infrastructure/http/HttpService";
import {GoogleTasksApi} from "../../../config/GoogleTasksApi";
import {UserService} from "../../user/UserService";
import {Headers} from "@angular/http";

@Injectable()
export class TaskListResource {
    private readonly ENDPOINT_URL: string = GoogleTasksApi.URL + '/users/@me/lists';
    private authHeader: Headers = new Headers();

    constructor(private httpService: HttpService,
                private userService: UserService) {
        this.authHeader.append('Authorization', 'Bearer ' + userService.getToken())
    }

    findAll(): Observable<Tasklist> {
        return this.httpService.get(this.ENDPOINT_URL, {headers: this.authHeader});
    }
}

export interface Tasklist {
    etag: string;
    items: TaskItem[];
    kind: string;
}

export interface TaskItem {
    kind: string;
    id: string;
    etag: string;
    title: string;
    updated: Date;
    selfLink: string;
}