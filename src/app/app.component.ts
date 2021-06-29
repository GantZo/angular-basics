import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'Post 1', text: 'Post body for Post Component', id: 1},
    // {title: 'Post 2', text: 'Next post!', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      // this.posts[0].title = 'Changed!' // not effective on ChangeDetectionStrategy.OnPush strategy
      this.posts[0] = {
        title: 'Changed', text: 'Post body for Post Component', id: 1
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('Id to remove = ', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
