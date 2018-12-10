import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
 // @ViewChild('videoPlayer') videoplayer: any;
  public splashHeight: number;
  @Input() playVideo: boolean;
  @Input() scrollPosition: number;
  public title : string;
  
  
  constructor(public appConfigSvc: AppConfigService, public authConfigSvc: AuthService) { }
  
  ngOnInit() {
    this.title = this.appConfigSvc.siteConfig.pages[0].title;
    this.splashHeight = window.innerHeight;    
  }

  
  @HostListener('window:scroll', ['$event']) onScrollEvent(event){
    this.splashHeight =  window.innerHeight;
  }  
}
