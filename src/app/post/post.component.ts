import {Component, OnInit} from '@angular/core'
import {Post, PostsService} from "../posts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {of} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post = {title:'', text:'', id:0}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    // this.post = this.route.snapshot.data.post
    this.route.data.subscribe(data => {
      this.post = data.post
    })

    // this.route.params.subscribe((params: Params) => {
      // const incoming = this.postsService.getById(+params.id)
      // const incoming = this.postsService.getById(parseInt(params.id))
      // if (incoming) {
      //   this.post = incoming
      // }
      // of(this.postsService.getById(parseInt(params.id)))
      //   .subscribe(post => {
      //     if (post) {
      //       this.post = post
      //     }
      //   })
    // })
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
