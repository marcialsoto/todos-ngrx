import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Validar, Editar, Eliminar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo:TodoModel
  @ViewChild('inputFisico', {static: false}) txtInputFisico: ElementRef

  chkCompleted: FormControl
  txtEdit: FormControl

  editing:boolean = false

  constructor( private store: Store<AppState>) { 
  }
  
  ngOnInit() {
    // this.todo.Completed = true
    this.chkCompleted = new FormControl( this.todo.Completed )
    this.txtEdit = new FormControl( this.todo.Text, Validators.required )
    // console.log(this.todo)
    this.chkCompleted.valueChanges.subscribe( value => {
      // debugger
      console.log(`Ìd: ${this.todo.Id}`)
      this.store.dispatch(Validar({Id: this.todo.Id}))
      //console.log(value)
    } )
  }

  edit() {
    this.editing = true
    this.txtEdit.setValue(this.todo.Text)
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }

  delete() {
    this.store.dispatch( Eliminar( { Id: this.todo.Id } ) )
  }

  finishEdit() {
    this.editing = false

    if( this.txtEdit.invalid ){ return }
    if( this.txtEdit.value === this.todo.Text ){ return }

    this.store.dispatch(Editar({
      Id: this.todo.Id,
      Text: this.txtEdit.value
    }))
  }

}
