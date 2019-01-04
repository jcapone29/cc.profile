import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { InfoCardConfig } from '../../../../shared/entities/info-card-config';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

  public isVisable = false;
  public indexHover = null;
  public cardConfig: InfoCardConfig = {
    title: "Understand techonolgy",
    subTitle: "Stay ahead of the compotition",
    cardType: "cc-card-blue",
  }

  constructor(public appConfigSvc: AppConfigService) { }


  onAppear() {
    this.isVisable = true;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200)
  }
}
