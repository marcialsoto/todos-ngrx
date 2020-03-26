import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from './models/todo.model';
import { filtrosValidos } from '../flitro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: TodoModel[], filtro: filtrosValidos): TodoModel[] {
    switch (filtro) {
      case 'completados':
        return todos.filter( todo => todo.Completed)

      case 'pendientes':
        return todos.filter( todo => !todo.Completed)
    
      default:
        return todos
    }
  }

}
