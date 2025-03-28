// classe abstrata que serve de molde para todas as operações
// toda operação vai precisar implementar o método calcular

export default abstract class Calculo {
    public abstract calcular(numero1: number, numero2: number): number;
  }
  