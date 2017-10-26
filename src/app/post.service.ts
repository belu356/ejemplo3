import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostService{
  constructor(private http: Http){ }
 // getPost():Observable<Post[]>...
}

