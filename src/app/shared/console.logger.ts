import { Injectable } from "@angular/core";

@Injectable()
export class ConsoleLogger {

    warn(msg: any) {
        console.warn(msg);
    }

    error(msg: any) {
        console.error(msg);
    }

    log(msg: any) {
        console.log(msg);
    }
}