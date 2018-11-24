import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SkillSetConfig } from '../../shared/entities/skill-set-config';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss']
})
export class ProjectImageComponent implements OnInit {

  @Input() skill: SkillSetConfig;
  @Input() even: boolean;

  constructor() { }

  ngOnInit() {
  }

}
