export class Auth {
    /** public variables to be accessed from the outside */
    constructor(
        public email: string,
        private _token: string,
        private _refreshToken: string,
        private _tokenExpirationDate: string,
        private _domain: string,
    ) {}


    get token() {
        if ( !this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    get refreshToken() {
        if ( !this._refreshToken) {
            return null;
        }
        return this._refreshToken;
    }

    get domain() {
        if ( !this._domain ) {
            return null;
        }
        return this._domain;
    }
}
