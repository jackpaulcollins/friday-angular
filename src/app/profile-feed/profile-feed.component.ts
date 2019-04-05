import { Component, OnInit} from '@angular/core';
import { Post } from "../models/post.model"
import { PostService } from '../post.service'

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css'],
  providers: [PostService]
})
export class ProfileFeedComponent implements OnInit  {

  postBody = null;

  profileFeedPosts: Post[];


  showPostBody(){
    this.postBody = 1;
  }

  createPost(){
    this.postBody = null;
  }

  postSubmitted(post: string){
    const newPost = new Post(post);
  }

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.profileFeedPosts = this.postService.getPosts();
    console.log(this.profileFeedPosts);
  }


}
