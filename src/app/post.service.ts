import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(){
    return POSTS;
  }

}
