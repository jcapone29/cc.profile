import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppConfigService } from '../shared/services/app-config.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
 // @ViewChild('videoPlayer') videoplayer: any;
  @Input() splashHeight: number;
  @Input() playVideo: boolean;
  @Input() scrollPosition: number;
  public title : string;
  
  constructor(public appConfigSvc: AppConfigService) { }
  
  ngOnInit() {
    this.title = this.appConfigSvc.siteConfig.pages[0].title;
    this.splashHeight = (window.innerHeight);
    //this.playVideo ? this.videoplayer.nativeElement.play() :  this.videoplayer.nativeElement.pause();
  }

  onResize(event) {   
    this.splashHeight = event.target.innerHeight;
  }
}
