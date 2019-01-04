import { Injectable } from '@angular/core';
import { AnchorInfo } from './anchor-info';
import { SkillSetConfig } from './skill-set-config';
import { LanguageConfig } from './language-config';
import { ResourcesConfig } from './resources-config';
import { WorkFlowConfig } from './workflow-config';
import { Auth0Config } from './auth0-config';
import { WorkflowComponent } from 'src/app/public/splash-page/main-view/workflow/workflow.component';
import { InfoCardConfig } from './info-card-config';


@Injectable()
export class SiteConfig{
    auth0: Auth0Config;
    pages: AnchorInfo ;
    resources: Array<ResourcesConfig>;
    skillSetConfig: Array<SkillSetConfig>;
    codeLanguagesConfig: Array<LanguageConfig>;
    workFlowConfig: Array<WorkFlowConfig>;
    dashboardMiniWidgets: Array<WorkFlowConfig>;
    businessInfo: Array<BusinessConfig[]>;
    footer: Array<AnchorInfo>;
}


@Injectable()
export class BusinessConfig{
    title: string;
    subTitle: string;
    marker?:boolean;
    icon?: string;
    markerLocation?: string;
}