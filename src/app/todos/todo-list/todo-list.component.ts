import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/flitro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[]
  filtroActivo: filtrosValidos = 'todos'


  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    // this.store.select('todos').subscribe( todos => this.todos = todos )
    this.store.subscribe( ({todos, filtro}) => {
      this.todos = todos
      this.filtroActivo = filtro
    })
  }

}
