// essa classe faz a potenciação (exponenciação)

import Calculo from './Calculo';

export default class Potencia extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    // usa Math.pow pra fazer a exponenciação
    return Math.pow(numero1, numero2);
  }
}
