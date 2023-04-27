// ATIVIDADE 1
function calculaIMC(peso, altura) {
    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;
    return imc
  }
  console.log(calculaIMC(80, 1.80));
  //Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358
  // SOLUÇÃO DAVI - ao invés de dividir o peso pela altura, dividi por alturaAoQuadrado. Além disso acrescentei o return.

//   ATIVIDADE 2
function calculaIdade(nome, anoNascimento, anoFuturo) {
    let idade = anoFuturo - anoNascimento;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
  }
  console.log(calculaIdade("Pedro", 2002, 2030))
  //Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".
  // SOLUÇÃO DAVI - Troquei as ordens dos parâmetros que estavam erradas e troquei alguns sinais como (`` e {}).

//   ATIVIDADE 3
function algarismosEmUmNumero(n) {
    let str = `${n}`;
    let contagem = str.length;
  
    if (n != parseInt(n)) {
      contagem = contagem - 1;
    }
  
    return contagem;
  }
   console.log(algarismosEmUmNumero(3.14159265));
  //Ao receber 3.14159265 a função deve retornar 9.
  //SOLUÇÃO DAVI - Corrigi sinal (``) para transformar em string, corrigi a palavra "length" que estava com o "h" antes do "t", alterei o +1 po -1 e troquei o return para "contagem"

//   ATIVIDADE 4
function diaDaSemana(n) {
    let resultado = "";
  
    if (n === 1 || n === '1') {
      resultado = 'Domingo';
    } else if(n === 2 || n === '2') {
      resultado = 'Segunda-feira';
    } else if(n === 3 || n === '3') {
      resultado = 'Terça-feira';
    } else if(n === 4 || n === '4') {
      resultado = 'Quarta-feira';
    } else if(n === 5 || n === '5') {
      resultado = 'Quinta-feira';
    } else if(n === 6 || n === '6') {
      resultado = 'Sexta-feira'; 
    } else if(n === 7 || n === '7') {
      resultado = 'Sábado';
    } else if(n !== resultado) {
      resultado = 'Valor Inválido';
    }
  
    return resultado;
  }
  console.log(diaDaSemana(1));
  console.log(diaDaSemana(3));
  console.log(diaDaSemana(0));
  //Ao receber '1' a função deve retornar 'Domingo'
  //Ao receber 3 a função deve retornar 'Terça-feira'
  //Ao receber 0 a função deve retornar 'Valor Inválido'
  //SOLUÇÃO DAVI - Alterei todos para o modelo da "terça" pois era a correta. Para ficar o valor inválido, eu coloquei a consição do resultado ser diferente de qualquer resultado. No sábado eu acrescentei o if após o else.