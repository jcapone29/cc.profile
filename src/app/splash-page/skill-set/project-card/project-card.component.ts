import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SkillSetConfig } from '../../../shared/entities/skill-set-config';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: SkillSetConfig;

  constructor() { }

  ngOnInit() {
  }

}
