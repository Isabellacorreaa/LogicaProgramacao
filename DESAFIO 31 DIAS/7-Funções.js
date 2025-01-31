//Crie uma função que calcule o dobro de um número.

function calcularDobro(numero) {
  return numero * 2;
}

let resultado = calcularDobro(5);
console.log(resultado);


//Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.

function boasVindas(nome) {
  return `Bem-vindo, ${nome}!`;
}

let mensagem = boasVindas('João');
console.log(mensagem);


//Crie uma função que receba dois números e retorne o maior deles.

function maiorNumero(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}

let resultado = maiorNumero(7, 5);
console.log(resultado);

//Implemente uma função que calcule a média de três números.

function calcularMedia(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let media = calcularMedia(7, 8, 9);
console.log(media);


//Crie uma função que receba um array de números e retorne a soma deles.

function somarNumeros(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
  }
  return soma;
}

let resultado = somarNumeros([1, 2, 3, 4, 5]);
console.log(resultado);


//Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function contarCaracteres(str) {
  return str.length;
}

let resultado = contarCaracteres('Olá, mundo!');
console.log(resultado);