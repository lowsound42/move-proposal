import { ILogger } from "./ILogger.ts";

export class Logger implements ILogger{
    log(message: string) {
        console.log(`${message}`);
    }
}