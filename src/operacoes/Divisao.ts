// classe que faz a divisão
// faz uma checagem extra para evitar divisão por zero

import Calculo from './Calculo';

export default class Divisao extends Calculo {
  public calcular(numero1: number, numero2: number): number {
    // evita divisão por zero, que dá erro
    if (numero2 === 0) throw new Error("Divisão por zero não é permitida.");
    
    // retorna o resultado da divisão
    return numero1 / numero2;
  }
}
