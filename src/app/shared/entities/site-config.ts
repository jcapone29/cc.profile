import { Injectable } from '@angular/core';
import { AnchorInfo } from './anchor-info';
import { SkillSetConfig } from './skill-set-config';
import { LanguageConfig } from './language-config';
import { ResourcesConfig } from './resources-config';
import { WorkFlowConfig } from './workflow-config';

@Injectable()
export class SiteConfig{
    pages: Array<AnchorInfo>;
    resources: Array<ResourcesConfig>;
    skillSetConfig: Array<SkillSetConfig>;
    codeLanguagesConfig: Array<LanguageConfig>;
    workFlowConfig: Array<WorkFlowConfig>;
}