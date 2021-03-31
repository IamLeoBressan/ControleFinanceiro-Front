import { ICiclo } from './ciclo';

export interface IPlano{
  id: number
  titulo: string,
  valorBase: number,
  ciclos: ICiclo[]
}
