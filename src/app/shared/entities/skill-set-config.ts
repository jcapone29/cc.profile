import { Injectable } from '@angular/core';

@Injectable()
export class SkillSetConfig{
    title: string;
    label: string;
    image: string;
    bodyText: string;
    footerText: string;
    visable = false;
}