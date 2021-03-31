import { createAction, createReducer, on } from "@ngrx/store";

export const planoReducer = createReducer(
  { mostrarPlanos : true },
  on(createAction('[Plano] Toggle Plano'), state => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      mostrarPlanos: !state.mostrarPlanos
    };
  })
);
