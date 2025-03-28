// classe separada pra resolver equações do segundo grau usando a fórmula de bhaskara
// bhaskara precisa de três números (a, b, c)

export default class Bhaskara {
    public calcular(a: number, b: number, c: number): string {
      // calcula o delta
      const delta = b * b - 4 * a * c;
  
      // se delta for negativo, não tem raiz real (lembrar de sempre começar pela exceção)
      if (delta < 0) return 'Não existem raízes reais.';
  
      // se delta for zero, tem uma raiz só
      if (delta === 0) {
        const x = -b / (2 * a);
        return `Raiz única: x = ${x}`;
      }
  
      // se delta for positivo, tem duas raízes reais
      const raizDelta = Math.sqrt(delta);
      const x1 = (-b + raizDelta) / (2 * a);
      const x2 = (-b - raizDelta) / (2 * a);
      return `As raízes são: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  