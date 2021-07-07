import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient | null) {
  }

  create(post: any): Observable<any> {
    if (this.http) {
      return this.http.post(``, post);
    } else return EMPTY
  }

  fetch(): Observable<any[]> {
    if (this.http) {
      return this.http.get<any[]>(``)
    } else return EMPTY
  }

  remove(id: number): Observable<any> {
    if (this.http) {
      return this.http.delete<void>(`${id}`)
    } else return EMPTY
  }
}
