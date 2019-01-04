import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Component({
  selector: 'app-splash-footer',
  templateUrl: './splash-footer.component.html',
  styleUrls: ['./splash-footer.component.scss']
})
export class SplashFooterComponent implements OnInit {

  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
  }

}
