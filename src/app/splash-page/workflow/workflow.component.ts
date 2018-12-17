import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
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
    console.log( this.appConfigSvc.siteConfig.workFlowConfig)
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
    try{
      this.appConfigSvc.siteConfig.workFlowConfig.forEach((flow) => {
        console.log(flow)
        flow.forEach(f => {
          let startId = f.id;
          if(f.connect){
            f.connect.forEach(connect => {
              console.log(startId, connect)
              this.connectMainWorkflows(startId, connect);
           });
          }
        });      
      });
    }
    catch (e){
      console.log(e);
    }
  }
  public async connectMainWorkflows(startId: string, endId: string){
    var start = document.getElementById(startId);
    var end = document.getElementById(endId);
    this.workFlowLineArray.push(new LeaderLine(
      start, end, { color: '#EE343C', dash: { animation: true }, startSocket: 'bottom', endSocket: 'top', startPlug: 'behind', endPlug: 'behind',  startPlugColor: '#3453ee', gradient: true}
    ));
  }

}




