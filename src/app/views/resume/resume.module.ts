import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProjectComponent} from 'src/app/components/project/project.component';
import {SubprojectComponent} from 'src/app/components/subproject/subproject.component';
import {TimelineItemComponent} from 'src/app/components/timeline-item/timeline-item.component';
import {HeaderComponent} from '../../components/header/header.component';
import {OtherProjectsComponent} from '../../components/other-projects/other-projects.component';
import {TagsComponent} from '../../components/tags/tags.component';
import {TimelineComponent} from '../../components/timeline/timeline.component';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeComponent} from './resume.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddressComponent} from '../../components/address/address/address.component';

@NgModule({
  declarations: [
    AddressComponent,
    HeaderComponent,
    ResumeComponent,
    TagsComponent,
    TimelineComponent,
    TimelineItemComponent,
    ProjectComponent,
    SubprojectComponent,
    OtherProjectsComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FontAwesomeModule
  ]
})
export class ResumeModule {
}
