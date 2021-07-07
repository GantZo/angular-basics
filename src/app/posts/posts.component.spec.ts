import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {EMPTY, of, throwError} from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

  it('should call fetch when onInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    })
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('should call fetch when fill posts', () => {
    const posts: number[] = [1, 2, 3, 4]
    spyOn(service, 'fetch').and.returnValue(of(posts))
    component.ngOnInit()
    expect(component.posts.length).toBe(posts.length)
  })

  it('should add new post into list', () => {
    const post = {title: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))
    component.add(post.title)

    expect(spy).toHaveBeenCalled()
    expect(component.posts).toContain(post)
  })

  it('should set error message if something wrong', () => {
    const error = 'error message'
    spyOn(service, "create").and.returnValue(throwError(error))
    component.add('post title')
    expect(component.message).toBe(error)
  })

})
