import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppConfigService } from '../../../../shared/services/app-config.service';
declare var LeaderLine: any;

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements AfterViewInit {

  public workFlowLineArray = new Array<any>();
  public isVisable = false;
  public isConentVisable = false;
  constructor(public appConfigSvc: AppConfigService) { }

  public async ngAfterViewInit() {
   
  }
  public async connectWorkflow() {
    try{
      this.appConfigSvc.siteConfig.workFlowConfig.forEach((f) => {
          let startId = f.id;
          if(f.connect){
            f.connect.forEach(async connect => {
            await  this.connectMainWorkflows(startId, connect);
           });
          }  
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
      start, end, { color: '#EE343C', dash: { duration: 1000, animation: true }, startSocket: 'auto',hide: true, endSocket: 'auto', startPlug: 'behind', endPlug: 'behind',  startPlugColor: '#3453ee', gradient: true}
    ));
  }

  public onAppear() {
    this.isVisable = true;
    setTimeout(async () => {
      await this.connectWorkflow();
      this.workFlowLineArray.forEach((line: any) =>{        
        line.show('draw',{duration: 1500});
      });
      this.isConentVisable = true;
    }, 2500)
  }
}




