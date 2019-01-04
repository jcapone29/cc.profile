import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  public isVisable = false;
  public mouseOverIndex = -1;
  constructor(public appConfigSvc: AppConfigService) { 

  }

  ngOnInit() {

  }

  public onAppear() {
    this.isVisable = true;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500)
  }

}
