export class Ganho{
  id: number;
  titulo: string;
  valor: number;
  tipoMovi: TipoMovi;
  anoContabilizar: number;
  mesContabilizar: number;
}

export enum TipoMovi{
  Mensal = 0,
  Anual = 1,
  Unica = 2
}
