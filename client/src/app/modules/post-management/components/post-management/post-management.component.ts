import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
