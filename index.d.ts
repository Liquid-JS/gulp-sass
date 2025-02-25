/// <reference types="node"/>

import { Options } from 'sass';

interface SassResults {
    css: string;
    map: string;
    stats: {
        entry: string;
        start: Date;
        end: Date;
        duration: number;
        includedFiles: string[];
    }
}

interface SassOptions extends Options {
    success?: (results: SassResults) => any;
    error?: (err: Error) => any;
    imagePaths?: string[];
}

interface GulpSassOptions extends SassOptions {
    errLogToConsole?: boolean;
    onSuccess?: (css: string) => any;
    onError?: (err: Error) => any;
    sync?: boolean;
}

interface Sass {
    (opts?: GulpSassOptions): NodeJS.ReadWriteStream;
    logError(error?: string): void;
    sync(options?: GulpSassOptions): NodeJS.ReadWriteStream;
}

declare var _tmp: Sass;
export = _tmp;