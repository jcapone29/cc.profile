import { Injectable } from '@angular/core';
import { AnchorInfo } from './anchor-info';
import { SkillSetConfig } from './skill-set-config';
import { LanguageConfig } from './language-config';
import { ResourcesConfig } from './resources-config';
import { WorkFlowConfig } from './workflow-config';
import { Auth0Config } from './auth0-config';
import { WorkflowComponent } from 'src/app/splash-page/workflow/workflow.component';

@Injectable()
export class SiteConfig{
    auth0: Auth0Config;
    pages: Array<AnchorInfo>;
    resources: Array<ResourcesConfig>;
    skillSetConfig: Array<SkillSetConfig>;
    codeLanguagesConfig: Array<LanguageConfig>;
    workFlowConfig: Array<WorkFlowConfig>;
    dashboardMiniWidgets: Array<WorkflowComponent>;
}