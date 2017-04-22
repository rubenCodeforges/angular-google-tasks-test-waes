export class GoogleApiConfig {
    private static readonly CLIENT_ID: string = "372063809670-qoggl887ba9vpt7aclf411hhk9f7icil.apps.googleusercontent.com";
    private static readonly DISCOVERY_DOCS: string[] = [
        "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"
    ];
    private static readonly SCOPE: string = [
        'https://www.googleapis.com/auth/tasks',
        'https://www.googleapis.com/auth/tasks.readonly'
    ].join(" ");

    public static getConfig(): GapiAuthInitProps {
        return {
            client_id: GoogleApiConfig.CLIENT_ID,
            discoveryDocs: GoogleApiConfig.DISCOVERY_DOCS,
            scope: GoogleApiConfig.SCOPE
        }
    }
}

export interface GapiAuthInitProps {
    client_id: string;
    discoveryDocs: string[];
    scope: string;
}
