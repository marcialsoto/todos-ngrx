import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConvertirTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: []
})
export class TodoPageComponent implements OnInit {
  completed:boolean = false

  constructor( private store: Store ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed
    this.store.dispatch(ConvertirTodos({completed: this.completed}))
    console.log(this.completed)
  }

}
