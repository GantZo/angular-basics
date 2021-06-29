import {Component} from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: string = ''
  searchField: string = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer in the world'},
    {title: 'Bread', text: 'Bread is all of the world'},
    {title: 'JavaScript', text: 'The worst language in the world'},
  ]


}
