import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { AppConfigService } from '../services/app-config.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: this.appConfigSvc.siteConfig.auth0.clientID,
    domain: this.appConfigSvc.siteConfig.auth0.domain,
    responseType: this.appConfigSvc.siteConfig.auth0.responseType,
    redirectUri: this.appConfigSvc.siteConfig.auth0.redirectUri,
    scope: this.appConfigSvc.siteConfig.auth0.scope
  });

  constructor(public router: Router, public appConfigSvc: AppConfigService) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.login();
        this.router.navigate(['/home']);
        console.log(err);
      }
      
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

}
