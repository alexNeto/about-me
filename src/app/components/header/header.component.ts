import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  info = {
    login: 'alexNeto',
    avatar_url: 'https://avatars2.githubusercontent.com/u/13910110?v=4',
    html_url: 'https://github.com/alexNeto',
    name: 'Alexandre Neto',
    location: 'São José dos Campos',
    hireable: true,
    bio: '[Java|Angular] web developer eager to learn more about software architecture and design patterns'
  };
  constructor() { }

  ngOnInit() {
  }

}
