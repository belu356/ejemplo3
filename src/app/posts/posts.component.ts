import { Component, OnInit, Input} from '@angular/core';
import {PostService} from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

/*export class PostsComponent implements OnInit {
  getPost()
  }
 
post: Post;

  constructor(private postService : PostService,
  private activatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.getPost(params['id']);
    });
    
    private getPost(id:number){
      this.postService.getPost(id).subscribe(post=>{
        this.post = post;
      });
    }
  }
*/
