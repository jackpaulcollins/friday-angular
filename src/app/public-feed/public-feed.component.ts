import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service'


@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css'],
  providers: [PostService]
})

export class PublicFeedComponent {

  postToDisplay;




  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postToDisplay = this.postService.getPosts();
  }

}
