import { Injectable } from '@angular/core';
import { AnchorInfo } from './anchor-info';
import { SkillSetConfig } from './skill-set-config';
import { LanguageConfig } from './language-config';

@Injectable()
export class SiteConfig{
    pages: Array<AnchorInfo>;
    skillSetConfig: Array<SkillSetConfig>;
    codeLanguagesConfig: Array<LanguageConfig>;
}