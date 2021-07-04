import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay, map, tap} from "rxjs/operators";

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
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos', {
      params,
      observe: 'response'
    })
      .pipe(
        map((response: any) => {
          console.log(response)
          return response.body
        }),
        delay(500),
        catchError(err => {
          console.log('Error: ', err.message)
          return throwError(err)
        })
      )
  }

  removeTodo(id: any): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: "events"
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event)
        }
        if (event.type == HttpEventType.Response) {
          console.log('Response', event)
        }
      })
    )
  }

  completeTodo(id: any): Observable<ToDo> {
    return this.http.put<ToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }, {
      responseType: 'json'
    })
  }

}
