import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
  }

}
