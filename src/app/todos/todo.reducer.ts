import { createReducer, on, State } from '@ngrx/store';
import { Agregar, Validar, Editar, Eliminar, ConvertirTodos, Limpiar } from './todo.actions';
import { TodoModel } from './models/todo.model';

export const initialState:TodoModel[] = [
  new TodoModel('Salvar al mundo'),
  new TodoModel('Vencer a Thanos'),
  new TodoModel('Conseguir traje de Ironman'),
  new TodoModel('Revivir a la abuelita de Peter Parker'),
  new TodoModel('Poner de rojo a Hulk'),
];

const _todoReducer = createReducer(initialState,
  on( Agregar, ( state, {Text}) => [...state, new TodoModel(Text)] ),
  on( Validar, ( state, {Id}) => {
    // debugger
    return state.map( todo => {
      if (todo.Id === Id) {
        return {
          ...todo,
          Completed: !todo.Completed
        }
      }else{
        return todo
      }
    })
  } ),
  
  on( Editar, ( state, {Id, Text}) => {
    // debugger
    return state.map( todo => {
      if (todo.Id === Id) {
        return {
          ...todo,
          Text: Text
        }
      }else{
        return todo
      }
    })
  } ),

  on( Eliminar, ( state, {Id}) => state.filter( todo => todo.Id !== Id ) ),

  on(Limpiar, state => state.filter( todo => !todo.Completed)),

  on(ConvertirTodos, (state, {completed}) => state.map( todo => {
    return {
      ...todo,
      Completed: completed
    }
  } )),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}