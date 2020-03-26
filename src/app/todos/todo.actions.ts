import { createAction, props } from '@ngrx/store';

export const Agregar = createAction(
    '[TODO] Agregar',
    props<{Text: string}>()
);

export const Validar = createAction(
    '[TODO] Validar',
    props<{Id: Number}>()
);

export const Editar = createAction(
    '[TODO] Editar',
    props<{Id: Number, Text: string}>()
);

export const Eliminar = createAction(
    '[TODO] Eliminar',
    props<{Id: Number}>()
);

export const ConvertirTodos = createAction(
    '[TODO] Convertir Todos',
    props<{completed: boolean}>()
);

export const Limpiar = createAction('[TODO] Limpiar');