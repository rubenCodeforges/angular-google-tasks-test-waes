import {GoogleApiConfig} from "ng-gapi/lib/config/GoogleApiConfig";

export class GapiConfig extends GoogleApiConfig {
    private static readonly CLIENT_ID: string = "372063809670-qoggl887ba9vpt7aclf411hhk9f7icil.apps.googleusercontent.com";
    private static readonly DISCOVERY_DOCS: string[] = [
        "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"
    ];
    private static readonly SCOPE: string = [
        'https://www.googleapis.com/auth/tasks',
        'https://www.googleapis.com/auth/tasks.readonly'
    ].join(" ");

    constructor() {
        super(GapiConfig.CLIENT_ID, GapiConfig.DISCOVERY_DOCS, GapiConfig.SCOPE);
    }
}