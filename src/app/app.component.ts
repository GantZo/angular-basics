import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  todoTitle = ''

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(response => {
        console.log('Response: ', response)
        this.todos = response
      })
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
        console.log(response)
        this.todos.push(response)
        this.todoTitle = ''
      })
  }
}
