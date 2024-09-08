import { Component, OnInit } from '@angular/core';
import { HttpWebService } from 'src/app/services/http-web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [];

  constructor(private httpService: HttpWebService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.httpService.getPosts().subscribe(data => {
          if(data) {
            this.posts = data;
          }
    })
  }

}
