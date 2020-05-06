import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags/tags.service';
import { Project } from './../../models/project.model';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html'
})
export class OtherProjectsComponent implements OnInit {

  info: Project[];

  constructor(private tag: TagsService) {
    this.info = [
      {
        title: 'Lada-app',
        subtitle: 'App para consulta e comparação de previsão do tempo',
        subproject: [
          {
            title: 'lada-app',
            link: 'https://github.com/alexNeto/lada-app',
            tags: [
              this.tag.html,
              this.tag.scss,
              this.tag.typescript,
              this.tag.angular,
              this.tag.firebaseHosting,
              this.tag.rxjs,
              this.tag.indexeddb
            ]
          }, {
            title: 'lada-api',
            link: 'https://github.com/alexNeto/lada-api',
            tags: [
              this.tag.python,
              this.tag.mongo,
              this.tag.flaskrest,
              this.tag.heroku,
              this.tag.bs
            ]
          }
        ]
      }, {
        title: 'especialista-bipolar',
        subtitle: 'Uso de sistema especialista para teste de episódios maníacos',
        subproject: [
          {
            title: 'front-end',
            link: 'https://github.com/alexNeto/especialista-bipolar/tree/master/especialista-front',
            tags: [
              this.tag.html,
              this.tag.css,
              this.tag.js,
              this.tag.react
            ]
          }, {
            title: 'back-end',
            link: 'https://github.com/alexNeto/especialista-bipolar/tree/master/especialista-back',
            tags: [
              this.tag.python,
              this.tag.experta,
              this.tag.flaskrest
            ]
          }
        ]
      }, {
        title: 'santos-dubot',
        subtitle: 'Chatbot para verificar informação de aerodromos, taf e metar no telegram',
        subproject: [
          {
            title: 'santos-dubot',
            link: 'https://github.com/alexNeto/santos-dubot',
            tags: [
              this.tag.java,
              this.tag.javaTelegram,
              this.tag.db40
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
