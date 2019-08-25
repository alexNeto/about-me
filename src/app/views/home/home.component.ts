import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info = {
    login: 'alexNeto',
    id: 13910110,
    node_id: 'MDQ6VXNlcjEzOTEwMTEw',
    avatar_url: 'https://avatars2.githubusercontent.com/u/13910110?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/alexNeto',
    html_url: 'https://github.com/alexNeto',
    followers_url: 'https://api.github.com/users/alexNeto/followers',
    following_url: 'https://api.github.com/users/alexNeto/following{/other_user}',
    gists_url: 'https://api.github.com/users/alexNeto/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/alexNeto/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/alexNeto/subscriptions',
    organizations_url: 'https://api.github.com/users/alexNeto/orgs',
    repos_url: 'https://api.github.com/users/alexNeto/repos',
    events_url: 'https://api.github.com/users/alexNeto/events{/privacy}',
    received_events_url: 'https://api.github.com/users/alexNeto/received_events',
    type: 'User',
    site_admin: false,
    name: 'Alexandre Neto',
    company: 'anova sistemas',
    blog: '',
    location: 'São José dos Campos',
    email: null,
    hireable: true,
    bio: '[Java|Angular] web developer eager to learn more about software architecture and design patterns',
    public_repos: 53,
    public_gists: 0,
    followers: 27,
    following: 51,
    created_at: '2015-08-21T21:51:41Z',
    updated_at: '2019-08-13T18:56:41Z'
  };
  constructor() { }

  ngOnInit() {
  }

}
