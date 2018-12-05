import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  
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
