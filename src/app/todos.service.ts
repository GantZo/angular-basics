import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay} from "rxjs/operators";

export interface ToDo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: ToDo): Observable<ToDo> {
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
      headers: headers
    })
  }

  fetchTodos(): Observable<ToDo[]> {
    let params = new HttpParams()
    params = params.append('_limit', '4')
    params = params.append('custom', 'any')
    // return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '3')
      params
    })
      .pipe(
        delay(500),
        catchError(err => {
          console.log('Error: ', err.message)
          return throwError(err)
        })
      )
  }

  removeTodo(id: any): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeTodo(id: any): Observable<ToDo> {
    return this.http.put<ToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }

}
