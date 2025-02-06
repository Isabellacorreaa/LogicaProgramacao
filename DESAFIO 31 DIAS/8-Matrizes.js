// Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

var matriz = [];
var numero = 1;

for (var i = 0; i < 3; i++) {
    matriz[i] = [];
    for (var j = 0; j < 3; j++) {
        matriz[i][j] = numero++;
    }
}

console.log(matriz);


//Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

function somaMatriz(matriz) {
  var soma = 0;
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}


//Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".

function criarTabuleiro() {
  var tabuleiro = [];
  
  for (var i = 0; i < 8; i++) {
    var linha = [];
    for (var j = 0; j < 8; j++) {
    
      if ((i + j) % 2 === 0) {
        linha.push("⬜");
      } else {
        linha.push("⬛");
      }
    }
    tabuleiro.push(linha);
  }
  
  return tabuleiro;
}

function exibirTabuleiro(tabuleiro) {
  for (var i = 0; i < tabuleiro.length; i++) {
    console.log(tabuleiro[i].join(" "));
  }
}


//Verifique quantos números em uma matriz são pares.

function contarPares(matriz) {
  var contador = 0;
  
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        contador++;
      }
    }
  }

  return contador;
}

var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(contarPares(matriz))


//Substitua todos os valores maiores que 10 em uma matriz por 0.

function substituirValoresMaiorQueDez(matriz) {
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > 10) {
        matriz[i][j] = 0;
      }
    }
  }
  return matriz;
}

var matriz = [
  [5, 15, 8],
  [12, 3, 7],
  [18, 9, 6]
];

var resultado = substituirValoresMaiorQueDez(matriz);
console.log(resultado);



//Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.

function multiplicarMatrizPorValor(matriz, valor) {
  return matriz.map(linha => linha.map(elemento => elemento * valor));
}

var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var valor = 2;

var resultado = multiplicarMatrizPorValor(matriz, valor);
console.log(resultado);