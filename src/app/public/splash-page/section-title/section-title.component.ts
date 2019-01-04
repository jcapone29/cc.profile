import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  
 @Input() title: string;
 public isVisable = false; 

  constructor() { }

  ngOnInit() {
  }


  public onAppear() {
    this.isVisable = true;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200)
  }
}
