import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const Filtrar = createAction(
    '[Filtro] Setear Filtro',
    props<{ filtro: filtrosValidos }>()
);
