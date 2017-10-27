import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostService{
  constructor(private http: Http){ }
 getPost():Observable<Post[]>{
   return this.http
   .get('./json/post.json')
   .map(function(data){
     return data.json();
   });
 }
}

/*getPost(id: number): Observable<Post>{
  return this.http.get('./json/post/json')
  .map(data=> data.json());
}*/

