//Escreva uma função recursiva que conte de n até 0.

function contarAteZero(n) {
    if (n < 0) {
        return;
    }
    
    console.log(n); 
    contarAteZero(n - 1); 

contarAteZero(5);
}

//Implemente uma função que calcule o fatorial de um número.

function fatorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    
    return n * fatorial(n - 1);
}

console.log(fatorial(5));

//Crie uma função que some todos os números de um array usando recursão.

function somarArray(arr) {
  
    if (arr.length === 0) {
        return 0;
    }
    
    return arr[0] + somarArray(arr.slice(1));
}

console.log(somarArray([1, 2, 3, 4, 5]));


//Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.

function verificarPalindromo(palavra) {
   
    if (palavra.length <= 1) {
        return true;
    }
    

    if (palavra[0] !== palavra[palavra.length - 1]) {
        return false;
    }
    
    return verificarPalindromo(palavra.slice(1, palavra.length - 1));
}

console.log(verificarPalindromo("radar"));  // Saída: true
console.log(verificarPalindromo("hello"));

//Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.

function fibonacci(n) {
   
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); 

//Crie uma função que liste todos os arquivos de um diretório usando recursão.

const fs = require('fs');
const path = require('path');

function listarArquivos(diretorio) {
    let arquivos = [];

    const itens = fs.readdirSync(diretorio);

    itens.forEach(item => {
        const caminhoCompleto = path.join(diretorio, item);
        const stats = fs.statSync(caminhoCompleto);
        
        if (stats.isDirectory()) {
           
            arquivos = arquivos.concat(listarArquivos(caminhoCompleto));
        } else {
        
            arquivos.push(caminhoCompleto);
        }
    });

    return arquivos;
}

const diretorioInicial = './caminho/do/diretorio';
console.log(listarArquivos(diretorioInicial));
