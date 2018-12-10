import { Injectable } from '@angular/core';

@Injectable()
export class Auth0Config{
    clientID: string;
    domain: string;
    responseType: string;
    redirectUri: string;
    scope: string;
}