// essa classe representa a operação de soma
// ela herda de Calculo e implementa o método calcular

import Calculo from './Calculo';

export default class Soma extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    // retorna a soma dos dois números
    return numero1 + numero2;
  }
}
