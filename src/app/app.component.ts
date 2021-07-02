import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {ToDo, TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: ToDo[] = []

  loading = false

  todoTitle = ''

  constructor(private todoService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    })
      .subscribe(response => {
        this.todos.push(response)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.todoService.fetchTodos()
      .subscribe(response => {
        this.todos = response
        this.loading = false
      })
  }

  removeTodo(id: any) {
    this.todoService.removeTodo(id)
      .subscribe(response => {
        console.log(response)
        this.todos = this.todos.filter(f => f.id !== id)
      })
  }
}
