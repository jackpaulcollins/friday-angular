import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from "../models/post.model"

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent  {

  postBody = null;

  profileFeedPosts: Post[] = [
    new Post("hello")
  ];

  showPostBody(){
    this.postBody = 1;
  }

  createPost(){
    this.postBody = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
