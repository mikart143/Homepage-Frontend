// import ansi from 'ansi-colors';

export default function setupLogger() {
    const _log = console.log;

    console.log = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cDefault%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: grey; color: white');
        return _log.apply(console, [data, ...params]);
    };

    const _info = console.info;

    console.info = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cInfo%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: blue; color: white');
        return _info.apply(console, [data, ...params]);
    };

    const _error = console.error;

    console.error = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cError%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: red; color: white');
        return _error.apply(console, [data, ...params]);
    };

    const _debug = console.debug;

    console.debug = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cDebug%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: grey; color: white');
        return _debug.apply(console, [data, ...params]);
    };

    const _warn = console.warn;

    console.warn = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cWarn%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: yellow; color: black');
        return _warn.apply(console, [data, ...params]);
    };

    const _trace = console.trace;

    console.trace = (message?: any, ...optionalParams: any[]) => {
        const data = timestamp()+'|'+'%cTrace%c'+'|'+message;
        const params = Array.from(optionalParams);
        params.unshift('background: inherit; color: inherit');
        params.unshift('background: black; color: white');
        return _trace.apply(console, [data, ...params]);
    };
}

function timestamp():string
{
    return `[${new Date().toISOString().replace("T", " ").replace(/\..+/, "")}]`;  
}