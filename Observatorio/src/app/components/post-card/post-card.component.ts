import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() title:string | undefined;
  @Input() description:string | undefined;
  @Input() image:string | undefined; 
  constructor() {}

  ngOnInit(): void {
  }

}
