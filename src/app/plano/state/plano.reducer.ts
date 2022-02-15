import { createAction, on, createReducer } from "@ngrx/store";

export const planosReducer = createReducer(
  {planoAtivo: "" },
  on(createAction('SelecionaPlano'), state => {
    return {
      ...state,
      planoAtivo: "OutroPlano"
    }
  })
);
