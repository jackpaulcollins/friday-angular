import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})

export class PublicFeedComponent {

  @Input() childFeedPosts: Post[];




  constructor() { }

  ngOnInit() {
    console.log(this.childFeedPosts);
  }

}
