import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers} from "@angular/http";
import {GoogleTasksApi} from "../../../config/GoogleTasksApi";
import {HttpService} from "../../../infrastructure/http/HttpService";
import {UserService} from "../../../common/user/UserService";
import {CrudResource} from "../../../infrastructure/crud/CrudResource";

@Injectable()
export class TaskListResource implements CrudResource {
    private readonly ENDPOINT_URL: string = GoogleTasksApi.URL + '/users/@me/lists';
    private authHeader: Headers = new Headers();

    constructor(private httpService: HttpService,
                private userService: UserService) {
        this.authHeader.append('Authorization', 'Bearer ' + userService.getToken())
    }

    findAll(): Observable<TasklistListResponse> {
        return this.httpService.get(this.ENDPOINT_URL, {headers: this.authHeader});
    }


    findById(id: string): Observable<Tasklist> {
        return this.httpService.get(this.ENDPOINT_URL + "/" + id, {headers: this.authHeader})
    }

    create(tasklist: Tasklist): Observable<Tasklist> {
        return this.httpService.post(this.ENDPOINT_URL, tasklist, {headers: this.authHeader})
    }

    update(tasklist: Tasklist): Observable<Tasklist> {
        return this.httpService.put(this.ENDPOINT_URL, tasklist, {headers: this.authHeader})
    }

    delete(id: string): Observable<void> {
        return this.httpService.get(this.ENDPOINT_URL + "/" + id, {headers: this.authHeader})
    }
}
export interface TasklistListResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    items: Tasklist[];
}

export interface Tasklist {
    id: string;
    etag: string;
    kind: string;
    title: string;
    updated: Date;
    selfLink: string;
}