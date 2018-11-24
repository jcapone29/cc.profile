import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../shared/services/app-config.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { state } from '@angular/animations';


@Component({
  selector: 'app-code-languages',
  templateUrl: './code-languages.component.html',
  styleUrls: ['./code-languages.component.scss']
})
export class CodeLanguagesComponent implements OnInit {

  @ViewChild('innercontainer') elementView: ElementRef;
  public index = 0;
  public freeze = false;
  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
this.moveIcons();
  }
  




  public moveIcons() {
      this.appConfigSvc.siteConfig.codeLanguagesConfig[this.index].top = Math.floor(Math.random() * this.elementView.nativeElement.offsetHeight) + 1;
      this.appConfigSvc.siteConfig.codeLanguagesConfig[this.index].left = Math.floor(Math.random() * this.elementView.nativeElement.offsetWidth) + 1;
      this.index = this.index === this.appConfigSvc.siteConfig.codeLanguagesConfig.length - 1 ? 0 :  this.index +1;
    setTimeout(() => {
      this.moveIcons();      
    }, 200);
  }
}