import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() anchor: any;
  @Input() scrollPosition: number;
  public navActive = false;  
  public navAnchors = ['Main', 'Skill Set','About Me']


  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
  }


}
