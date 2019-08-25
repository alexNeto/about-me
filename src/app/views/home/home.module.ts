import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimelineItemComponent } from 'src/app/components/timeline-item/timeline-item.component';
import { HeaderComponent } from './../../components/header/header.component';
import { OtherProjectsComponent } from './../../components/other-projects/other-projects.component';
import { TimelineComponent } from './../../components/timeline/timeline.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    TimelineComponent,
    TimelineItemComponent,
    OtherProjectsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
