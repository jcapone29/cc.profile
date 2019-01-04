import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { InfoCardConfig } from '../../../../shared/entities/info-card-config';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss']
})
export class BusinessPlanComponent  {

  public isVisable = false;
  public cardConfig: InfoCardConfig = {
    title: "",
    subTitle: "Stay ahead of the compotition",
    cardType: "cc-card-red",
  }
  
  constructor(public appConfigSvc: AppConfigService) { }


  public onAppear() {
    this.isVisable = true;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500)
  }
}
