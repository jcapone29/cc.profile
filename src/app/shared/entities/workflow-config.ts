import { Injectable } from '@angular/core';

@Injectable()
export class WorkFlowConfig{
    id: string;
    icon: string;
    title: string;   
    placeholder = false;
    connect: string[];
}