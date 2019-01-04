import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AnchorInfo } from 'src/app/shared/entities/anchor-info';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  public splashHeight: number;
  @Input() playVideo: boolean;
  @Input() scrollPosition: number;
  public config : AnchorInfo;
  
  
  constructor(public appConfigSvc: AppConfigService, public authConfigSvc: AuthService) { }
  
  ngOnInit() {
    this.config = this.appConfigSvc.siteConfig.pages;
    this.splashHeight = window.innerHeight;    
  }

  
  @HostListener('window:scroll', ['$event']) onScrollEvent(event){
    this.splashHeight =  window.innerHeight;
  }  
}
