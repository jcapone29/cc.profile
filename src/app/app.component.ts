import { Component, Input, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showNav = true;
  public scrollPosition = 0;
  public splashHeight : number;

  constructor() { 
    
  }

  ngOnInit() {
    this.splashHeight = (window.innerHeight);
  }

  onResize(event) {
    this.splashHeight = event.target.innerHeight;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.showNav = window.pageYOffset < this.splashHeight;
    this.scrollPosition =  window.pageYOffset;
  }   
}
