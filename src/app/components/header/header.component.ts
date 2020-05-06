import {Component, OnInit} from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  info = {
    login: 'alexNeto',
    avatar_url: 'https://avatars2.githubusercontent.com/u/13910110?v=4',
    html_url: 'https://github.com/alexNeto',
    name: 'Alexandre Neto',
    location: 'São José dos Campos',
    hireable: true,
    bio: 'Full stack developer eager to learn more about software architecture and design patterns'
  };

  faArrowLeft = faArrowLeft;

  constructor() {
  }

  ngOnInit() {
  }

}
