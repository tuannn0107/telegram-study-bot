import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../models/post";
import {PostManagementService} from "../../services/post-management.service";

declare const jQuery: any;

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {
  post: Post;
  listPost = new Array<Post>();

  constructor(
    private postManagementService: PostManagementService
  ) { }

  ngOnInit() {
    this.getListPost();
  }

  getListPost()
  {
    this.postManagementService.getPostList().subscribe(data => {
      console.log('list post ' + data);
      this.listPost = data;
    })
  }

}
