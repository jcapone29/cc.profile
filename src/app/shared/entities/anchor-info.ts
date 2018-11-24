import { Injectable } from '@angular/core';

@Injectable()
export class AnchorInfo{
    title: string;
    anchorName: string;
    showNav: boolean;
    isTouched: boolean;
    icon: string;
}