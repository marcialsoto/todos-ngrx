import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, Filtrar } from 'src/app/flitro/filtro.actions';
import { Limpiar } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtroActivo: filtrosValidos = 'todos'
  filtros: filtrosValidos[] = ['todos', 'pendientes', 'completados']
  pending: number = 0

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    // this.store.select('filtro').subscribe( filtro => {
    //   this.filtroActivo = filtro
    //   console.log(filtro)
    // })
    this.store.subscribe( ({todos, filtro}) => {
      this.filtroActivo = filtro
      this.pending = todos.filter( todo => !todo.Completed).length
    } )

    console.log(this.pending)
  }

  setFilter(filtro: filtrosValidos) {
    this.store.dispatch(Filtrar({filtro: filtro}))
  }

  clearCompleted() {
    this.store.dispatch(Limpiar())
  }

}
