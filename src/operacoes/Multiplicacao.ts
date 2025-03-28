// classe da multiplicação
// mesma lógica: herda da classe base e implementa o método calcular

import Calculo from './Calculo';

export default class Multiplicacao extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    // retorna o produto dos dois números
    return numero1 * numero2;
  }
}
