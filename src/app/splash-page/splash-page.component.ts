import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';

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
  
  constructor() { }
  
  ngOnInit() {
    this.splashHeight = (window.innerHeight);
    //this.playVideo ? this.videoplayer.nativeElement.play() :  this.videoplayer.nativeElement.pause();
  }

  onResize(event) {   
    this.splashHeight = event.target.innerHeight;
  }
}
