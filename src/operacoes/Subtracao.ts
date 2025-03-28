// essa classe representa a operação de subtração
// também herda da classe Calculo e implementa o método calcular

import Calculo from './Calculo';

export default class Subtracao extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    // retorna a diferença entre os dois números
    return numero1 - numero2;
  }
}
