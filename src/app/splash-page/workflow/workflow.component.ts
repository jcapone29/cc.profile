import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { WorkFlowConfig } from '../../shared/entities/workflow-config';
declare var LeaderLine: any;

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements AfterViewInit {

  public workFlowLineArray = new Array<any>();
  constructor(public appConfigSvc: AppConfigService) { }

  public async ngAfterViewInit() {
    await this.connectWorkflow();
  }

 public async onResize(e: Event) {
  //   this.workFlowLineArray.forEach(line => {
  //     try {
  //       line.remove();
  //     }
  //     catch (e) {
  //     }
  //   });

  //  await this.connectWorkflow();
  }

  public async connectWorkflow() {
    this.workFlowLineArray = new Array<any>();
    var index = 0;
    try{
      this.appConfigSvc.siteConfig.workFlowConfig.forEach((flow) => {
        if (index + 1 < this.appConfigSvc.siteConfig.workFlowConfig.length) {
          this.connectMainWorkflows(flow, index);                
          index++;
        }
        this.connectSubWorkflows(flow) 
      });
    }
    catch (e){
      console.log(e);
    }
  }
  public async connectMainWorkflows(flow : WorkFlowConfig, index: number){
    var start = document.getElementById(flow.id);
    var end = document.getElementById(this.appConfigSvc.siteConfig.workFlowConfig[index + 1].id);
    this.workFlowLineArray.push(new LeaderLine(
      start, end, { color: '#EE343C', dash: { animation: true }, startSocket: 'bottom', endSocket: 'top', startPlug: 'behind', endPlug: 'behind',  startPlugColor: '#3453ee', gradient: true}
    ));
  }

  public async connectSubWorkflows(flow : WorkFlowConfig){
    var start = document.getElementById(flow.id);
    var end = document.getElementById(flow.workflowId);
    this.workFlowLineArray.push(new LeaderLine(
      start, end, { color: '#EE343C',startPlug: 'behind', endPlug: 'behind',startPlugColor: '#3453ee', gradient: true }
    ));
  }
}




