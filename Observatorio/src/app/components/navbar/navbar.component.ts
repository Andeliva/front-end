import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public matchQuery:any;
  
  constructor(){
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }
  ngOnInit(): void {
  }
}
