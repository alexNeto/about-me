import {TimelineInfo} from '../../models/timeline-info.model';
import {Component, OnInit} from '@angular/core';
import {TagsService} from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  info: TimelineInfo[];

  constructor(private tag: TagsService) {
    this.info = [
      {
        date: 'novembro de 2019 - presente',
        header: 'Guichê Virtual',
        content: 'Desenvolvimento e manutenção de plataforma para compra de passagens de ônibus online.',
        tags: [
          this.tag.html,
          this.tag.scss,
          this.tag.typescript,
          this.tag.vue,
          this.tag.java,
          this.tag.groovy,
          this.tag.spring,
          this.tag.mysql
        ]
      }, {
        date: 'fevereiro de 2019 - novembro de 2019',
        header: 'Anova Sistemas',
        content: 'Desenvolvimento e manutenção de sistema web para gestão de auto escola.',
        tags: [
          this.tag.html,
          this.tag.css,
          this.tag.js,
          this.tag.jsp,
          this.tag.java,
          this.tag.spring,
          this.tag.postgres
        ]
      }, {
        date: 'julho de 2016 - Presente',
        header: 'Análise e Desenvolvimento de Sistemas',
        content: 'Faculdade de Tecnologia ' +
          '(<a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank">FATEC</a>), São José dos Campos, SP',
        tags: []
      }, {
        date: 'novembro de 2017 - janeiro de 2019',
        header: 'Univalle Sistemas',
        content: 'Desenvolvimentos de sistemas web ERP para gestão de vendas, emissão e controle de notas fiscais.',
        tags: [
          this.tag.html,
          this.tag.css,
          this.tag.js,
          this.tag.angularjs,
          this.tag.java,
          this.tag.spring,
          this.tag.postgres,
          this.tag.android,
          this.tag.kotlin
        ]
      }, {
        date: 'junho de 2017',
        header: 'Triagem e digitação de Notas Fiscais Paulistas',
        content: 'Centro de Tratamento Fabiana Macedo de Morais ' +
          '(<a href="http://www.gacc.com.br/" target ="_blank"> CTFM - GACC </a>)',
        tags: []
      }, {
        date: 'novembro de 2016',
        header: 'Aula de python para alunos medalhistas da OBMEP',
        content: 'Faculdade de Tecnologia ' +
          '(<a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank">FATEC</a>)',
        tags: []
      }, {
        date: 'outubro de 2016',
        header: 'Aula de python para estudantes do ensino técnico',
        content: 'Escola Técnica Estadual ' +
          '(<a href="http://www.etecsjcampos.com.br/" target = "_blank"> ETEC </a>)',
        tags: []
      }, {
        date: 'julho de 2013 - dezembro de 2014',
        header: 'Técnico em Eletrônica',
        content: 'Centro de Educação Profissional Hélio Augusto de Souza ' +
          '(<a href="http://cephas.org.br/" target="_blank">CEPHAS</a>), São José dos Campos, SP',
        tags: []
      }
    ];
  }

  ngOnInit() {
  }

}
