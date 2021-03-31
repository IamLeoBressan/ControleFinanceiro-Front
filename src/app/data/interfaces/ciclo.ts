import { Ganho } from './ganho';
import { Gasto } from './gasto';

export interface ICiclo{
  id: number,
  titulo: string,
  jurosMensal: number,
  ganhos: Ganho[];
  gastos: Gasto[];
}
