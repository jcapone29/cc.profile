import { Component, OnInit, Input } from '@angular/core';
import { InfoCardConfig } from '../../entities/info-card-config';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent{
  @Input() config : InfoCardConfig;
  public grow = false;
}
