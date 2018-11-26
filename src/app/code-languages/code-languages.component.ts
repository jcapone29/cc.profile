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

  public index = 0;
  public freeze = false;
  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {

  }
  
}