import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts
    }
    return posts.filter(post => {
      switch (field) {
        case 'title':
          return post["title"].toLowerCase().includes(search.toLowerCase())
        case 'text':
          return post["text"].toLowerCase().includes(search.toLowerCase())
        default:
          return post
      }
    })
  }

}
