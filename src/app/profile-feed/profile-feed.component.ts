import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements OnInit {

  postBody = null;

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
