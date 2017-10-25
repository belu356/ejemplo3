import { Component, OnInit, Input} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
 



Posts: Array<any>;
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(Posts=> {
      this.Posts = Posts.json();
    })
  }

}
