import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  public mouseOverIndex = -1;
  constructor(public appConfigSvc: AppConfigService) { 

  }

  ngOnInit() {

  }

  onAppear(index: number) {
    this.appConfigSvc.siteConfig.skillSetConfig[index].visable = true;
  }

}
