import { Component } from '@angular/core';
import { Users } from '../models/users';
import {Http} from '@angular/http';
import {Adress} from '../models/adress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba de servicios';
  Users:Array<Users>;

  constructor(private http: Http){
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());

  }
}