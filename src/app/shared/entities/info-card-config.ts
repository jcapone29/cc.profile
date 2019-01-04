import { Injectable } from '@angular/core';

@Injectable()

export class InfoCardConfig{
    title: string;
    subTitle: string;
    cardType: string;
    responsive? = false;
    middleTitle?:string;
    middleSubTitle?: string;
    link?: string;
    route?: string; 
    icon?: string;
    background?: string;
    placeholder?:boolean;
  }
  