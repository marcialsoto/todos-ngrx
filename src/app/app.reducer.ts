import { ActionReducerMap } from '@ngrx/store';

import { TodoModel } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from "./flitro/filtro.actions";
import { filtroReducer } from './flitro/filtro.reducer';

export interface AppState {
    todos: TodoModel[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}