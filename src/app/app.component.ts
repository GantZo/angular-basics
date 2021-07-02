import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

export interface ToDo {
  completed: boolean
  title: string
  id?: number
}

export interface ResponseToDo {
  id?: number
  todo: ToDo
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: ToDo[] = []

  loading = false

  todoTitle = ''

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    const newTodo = {
      title: this.todoTitle,
      completed: false
    }
    this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        this.todos.push(response)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todos = response
        this.loading = false
      })
  }


  removeTodo(id: any) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(response => {
        console.log(response)
        this.todos = this.todos.filter(f => f.id !== id)
      })
  }
}
