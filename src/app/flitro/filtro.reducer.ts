import { createReducer, on } from '@ngrx/store';
import { Filtrar, filtrosValidos } from './filtro.actions';
 
export const initialState:filtrosValidos = 'todos';
 
const _filtroReducer = createReducer(initialState,
  on(Filtrar, (state, {filtro}) => filtro),
);
 
export function filtroReducer(state, action) {
  return _filtroReducer((state), action);
}