import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    // return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
    //   headers: new HttpHeaders({
    //     'MyCustomHeader': Math.random().toString()
    //   })
    // })
    return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
      // headers
      headers: headers
    })
  }

  fetchTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
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
