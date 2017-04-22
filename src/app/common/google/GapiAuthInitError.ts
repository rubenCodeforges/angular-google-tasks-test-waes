export class GapiAuthInitError extends Error {
    constructor() {
        super("The google api auth was not yet initialized");
        this.name = "GapiAuthInitError";
        this.stack = (<any> new Error()).stack;
    }
}