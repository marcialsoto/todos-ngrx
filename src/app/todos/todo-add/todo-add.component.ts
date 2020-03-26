import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Agregar } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl

  constructor( private store:Store<AppState> ) { 
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit() {
  }

  agregar() {
    if (this.txtInput.invalid) {
      return
    }

    this.store.dispatch(Agregar({Text: this.txtInput.value}))
    this.txtInput.reset()
    console.log(this.txtInput.value)
    console.log(this.txtInput.valid)
  }

}
