export interface Ganho{
  id: number,
  titulo: number,
  valor: number,
  tipoMovi: TipoMovi,
  anoContabilizar: number,
  mesContabilizar: number
}

export enum TipoMovi{
  Mensal = 0,
  Anual = 1,
  Unica = 2
}
