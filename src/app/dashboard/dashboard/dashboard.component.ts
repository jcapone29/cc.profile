import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
  }

}
