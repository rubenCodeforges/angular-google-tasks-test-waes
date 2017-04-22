import {GapiAuthInitConfig} from "./GapiAuthInitConfig";
export class GoogleApi {
    private readonly CLIENT_ID: string = "372063809670-qoggl887ba9vpt7aclf411hhk9f7icil.apps.googleusercontent.com";
    private readonly DISCOVERY_DOCS: string[] = [
        "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"
    ];
    private readonly SCOPE: string = [
        'https://www.googleapis.com/auth/tasks',
        'https://www.googleapis.com/auth/tasks.readonly'
    ].join(" ");

    constructor() {
        return this;
    }

    public getConfig(): GapiAuthInitConfig {
        return {
            client_id: this.CLIENT_ID,
            discoveryDocs: this.DISCOVERY_DOCS,
            scope: this.SCOPE
        }
    }
}

