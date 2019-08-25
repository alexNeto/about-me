import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  html = {
    link: 'https://www.w3schools.com/html/default.asp',
    text: 'HTML'
  };

  css = {
    link: 'https://www.w3schools.com/css/default.asp',
    text: 'CSS'
  };


  js = {
    link: 'https://www.w3schools.com/js/default.asp',
    text: 'JavaScript'
  };

  jsp = {
    link: 'https://pt.wikipedia.org/wiki/JavaServer_Pages',
    text: 'JSP'
  };

  java = {
    link: 'https://www.java.com/pt_BR/about/whatis_java.jsp',
    text: 'Java'
  };

  spring = {
    link: 'https://spring.io/',
    text: 'Spring'
  };

  postgres = {
    link: 'https://www.postgresql.org/',
    text: 'PostgreSQL'
  };

  angularjs = {
    link: 'https://angularjs.org/',
    text: 'AngularJS'
  };

  angular = {
    link: 'https://angular.io/',
    text: 'Angular'
  };

  android = {
    link: 'https://developer.android.com/index.html?hl=pt-br',
    text: 'Android'
  };

  kotlin = {
    link: 'https://kotlinlang.org/',
    text: 'Kotlin'
  };
}
