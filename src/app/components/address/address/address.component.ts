import {Component, OnInit} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedinIn;
  faEnvelope = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }

}
