import { Component, Input, OnInit } from '@angular/core';
import { Subproject } from './../../models/project.model';

@Component({
  selector: 'app-subproject',
  templateUrl: './subproject.component.html'
})
export class SubprojectComponent implements OnInit {

  @Input() subproject: Subproject;
  constructor() { }

  ngOnInit() {
  }

}
