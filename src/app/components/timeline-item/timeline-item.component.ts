import { Component, Input, OnInit } from '@angular/core';
import { TimelineInfo } from './../../models/timeline-info.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent implements OnInit {

  @Input() timelineInfo: TimelineInfo;
  constructor() { }

  ngOnInit() {
  }

}
