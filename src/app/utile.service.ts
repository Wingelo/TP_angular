import { Injectable } from '@angular/core';
import { Http, Headers } from'@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor(private  http: Http) { }

  getPersonne(): Promise<any> {
    return this.http.get('http://92.222.69.104/todo/create/ced/lol').toPromise();
  }
}
