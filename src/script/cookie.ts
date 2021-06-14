class Cookie {
    //@ts-ignore
    static write( key : string, value : string, days : number = 0, domain : string = undefined ) {

        let domainStr = '';
        let expiresStr = '';

        if( domain ) {
            domainStr = `;domain=${domain}`;
        }

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expiresStr = "; expires=" + date.toUTCString();
        }
        document.cookie = `${key}=${value}${expiresStr}${domainStr};path=/`;
    }

    static read( key : string ) {
        const nameEQ = key + "=";
        const ca = document.cookie.split(';');
        for( let i = 0;i < ca.length; i++ ) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    static delete( key : string, domain : string ) {
        Cookie.write( key, '', -1, domain );
    }
}

export default Cookie;
