import { TipoMovi } from './ganho';

export interface Gasto{
    id: number,
    titulo: number,
    valor: number,
    tipoMovi: TipoMovi,
    anoContabilizar: number,
    mesContabilizar: number
}
