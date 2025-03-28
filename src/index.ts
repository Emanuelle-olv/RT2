// arquivo principal, onde o programa começa
// importar as operações e o módulo readline pra conversar com o usuário

// o usuário digita os dois números e a operação tudo em uma linha só
// exemplo: 5 3 somar

import * as readline from 'readline';
import Soma from './operacoes/Soma';
import Subtracao from './operacoes/Subtracao';
import Multiplicacao from './operacoes/Multiplicacao';
import Divisao from './operacoes/Divisao';
import Potencia from './operacoes/Potencia';
import Bhaskara from './operacoes/Bhaskara';
import mensagens from './mensagens';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// essa função mostra as instruções e começa o processo
function iniciar(): void {
  console.log('\n----------------------------------------\n');
  console.log(mensagens.operacoesDisponiveis);

  // pula uma linha pra dar espaço
  console.log('\n📌 exemplo de uso:');
  console.log('→ 5 2 somar');
  console.log('→ bhaskara');

  // mais uma linha só pra respirar visualmente
  console.log('\n💡 digite "sair" para encerrar o programa\n');

  // pergunta pro usuário os dados da conta
  rl.question('digite os números e a operação: ', (entrada) => {
    const partes = entrada.trim().split(' ');

    // se a pessoa digitar sair, o programa termina
    if (entrada.toLowerCase() === 'sair') {
      console.log('\naté logo :)');
      rl.close();
      return;
    }

    // se for bhaskara, faz uma leitura separada
    if (partes.length === 1 && partes[0].toLowerCase() === 'bhaskara') {
      rl.question('digite os coeficientes a, b e c separados por espaço: ', (coef) => {
        const [a, b, c] = coef.trim().split(' ').map(Number);
        const bhaskara = new Bhaskara();
        console.log(`\n${bhaskara.calcular(a, b, c)}\n`);
        iniciar(); // chama de novo pra repetir o processo
      });
      return;
    }

    // pega os dois números e a operação (ex: 5 2 multiplicar)
    const numero1 = Number(partes[0]);
    const numero2 = Number(partes[1]);
    const operacao = partes[2]?.toLowerCase();

    let calculo;

    switch (operacao) {
      case 'somar':
        calculo = new Soma();
        break;
      case 'subtrair':
        calculo = new Subtracao();
        break;
      case 'multiplicar':
        calculo = new Multiplicacao();
        break;
      case 'dividir':
        calculo = new Divisao();
        break;
      case 'potencia':
        calculo = new Potencia();
        break;
      default:
        console.log('\noperação inválida 😢\n');
        iniciar();
        return;
    }

    // exibe o resultado da operação
    console.log(`\n✅ resultado: ${calculo.calcular(numero1, numero2)}\n`);

    // chama a função de novo pra permitir outra conta
    iniciar();
  });
}

// mostra a mensagem de boas-vindas só uma vez
console.log('\n' + mensagens.boasVindas);
iniciar();
