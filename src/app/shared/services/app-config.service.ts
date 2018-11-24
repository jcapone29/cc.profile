import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteConfig } from '../entities/site-config';



@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

public siteConfig = new SiteConfig();

  constructor(private http: HttpClient) { }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get("../../assets/config.json").subscribe((config: SiteConfig) => {
        this.siteConfig = config;
           resolve(true);
        });
      });
    }
}
