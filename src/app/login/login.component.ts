import {Component, OnInit} from '@angular/core';
import {UtileService} from '../utile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UtileService]
})
export class LoginComponent {


  liste = [];
  utileService;
  objectKeys = Object.keys;

  constructor(utile: UtileService) {
    this.utileService = utile;
    this.utileService.getPersonne().then(donnees => this.liste = JSON.parse(donnees._body)).catch(this.handleError);

  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  clicko() {
    console.log(this.liste);
  }
}
