import { Injectable } from '@angular/core';

@Injectable()
export class WorkFlowConfig{
    id: string;
    icon: string;
    title: string;   
    info: string[];
    placeholder = false;
    connect: string[];
}