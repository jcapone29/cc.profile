import { Injectable } from '@angular/core';

@Injectable()
export class WorkFlowConfig{
    id: string;
    workflowId: string;
    icon: string;
    title: string;    
    bodyText: string;
}