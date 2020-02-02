import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  isLoading:boolean;
  newPostContent:string;
  posts: Post[] = [];

  constructor(
    private postsService:PostsService
  ) { 
    this.isLoading = true;
    this.newPostContent = "";
    
  }

  call()
  { 
    this.postsService.getAllTodos()
      .subscribe( postsArray => 
        {

          console.log(postsArray["posts"].length);
          for(let i=0;i<postsArray["posts"].length;i++)
          {
            console.log("Inside");
            let postTemp = new Post();
            postTemp.id = postsArray["posts"][i]["id"];
            postTemp.userName = postsArray["posts"][i]["userName"];
            postTemp.imageUrl = postsArray["posts"][i]["imageUrl"];
            postTemp.content = postsArray["posts"][i]["content"];
            postTemp.likeCount = postsArray["posts"][i]["likeCount"];
            postTemp.commentCount = postsArray["posts"][i]["commentCount"];
            postTemp.shareCount = postsArray["posts"][i]["shareCount"];
            this.posts.push(postTemp);
          }
          console.log(this.posts);
          this.isLoading=false;
        } 
      );
  }

  PostContent()
  {
    if(this.newPostContent!=null&&this.newPostContent!="")
    {
      let postTemp = new Post();
      postTemp.content = this.newPostContent;
      postTemp.imageUrl = "assets/img/avatar-6.jpg";
      postTemp.userName = "Harikrishnan";
      postTemp.likeCount = 0;
      postTemp.commentCount = 0;
      postTemp.shareCount = 0;
      this.posts.push(postTemp);
      this.newPostContent = "";
    }
  }

  ngOnInit() {
    this.call();
  }


}
