// Implemente uma pilha com métodos para adicionar, remover e visualizar o topo.


class Pilha {
    constructor() {
        this.itens = [];
    }


    adicionar(elemento) {
        this.itens.push(elemento);
    }

   
    remover() {
        if (this.estaVazia()) {
            console.log("A pilha está vazia.");
            return null;
        }
        return this.itens.pop();
    }


    topo() {
        if (this.estaVazia()) {
            console.log("A pilha está vazia.");
            return null;
        }
        return this.itens[this.itens.length - 1];
    }

   
    estaVazia() {
        return this.itens.length === 0;
    }


    exibirPilha() {
        console.log(this.itens);
    }
}


const pilha = new Pilha();
pilha.adicionar(10);
pilha.adicionar(20);
pilha.adicionar(30);

console.log("Topo da pilha:", pilha.topo());

pilha.exibirPilha(); 

pilha.remover(); 
console.log("Topo da pilha após remover:", pilha.topo()); 

pilha.exibirPilha();


//Crie uma função que use uma pilha para verificar se uma string é um palíndromo.


function verificarPalindromo(str) {
    const pilha = [];
    const tamanho = str.length;

    
    for (let i = 0; i < tamanho; i++) {
        pilha.push(str[i]);
    }

    
    for (let i = 0; i < tamanho; i++) {
        if (str[i] !== pilha.pop()) {
            return false; 
        }
    }

    return true; 
}

console.log(verificarPalindromo("radar"));  
console.log(verificarPalindromo("hello")); 
console.log(verificarPalindromo("madam"))


//Simule o funcionamento do botão "Desfazer" em um editor de texto usando pilhas.

class EditorTexto {
    constructor() {
        this.textoAtual = "";
        this.pilha = [];
    }

    adicionarTexto(texto) {
        this.pilha.push(this.textoAtual);
        this.textoAtual += texto;
        console.log("Texto Atual: " + this.textoAtual);
    }

    desfazer() {
        if (this.pilha.length === 0) {
            console.log("Não há ações para desfazer.");
            return;
        }
        this.textoAtual = this.pilha.pop();
        console.log("Texto após desfazer: " + this.textoAtual);
    }
}


const editor = new EditorTexto();

editor.adicionarTexto("Olá");
editor.adicionarTexto(" Mundo!");
editor.desfazer();  
editor.desfazer();


//Escreva uma função que converta números decimais para binários usando pilhas.

function decimalParaBinario(decimal) {
    const pilha = [];

    if (decimal === 0) {
        return "0";
    }

    while (decimal > 0) {
        pilha.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
 
    let binario = '';
    while (pilha.length > 0) {
        binario += pilha.pop();
    }

    return binario;
}

console.log(decimalParaBinario(10));  
console.log(decimalParaBinario(25)); 
console.log(decimalParaBinario(7));  
console.log(decimalParaBinario(0));

// Use uma pilha para resolver expressões matemáticas como `(1 + (2 * 3))`.


function calcularExpressao(expr) {
    const pilha = [];
    let num = 0;

    for (let i = 0; i < expr.length; i++) {
        const char = expr[i];

        if (/\d/.test(char)) {
            num = num * 10 + Number(char);
        } else if (char === '(') {
            pilha.push('(');
        } else if (char === ')') {
            pilha.push(num);
            num = 0;
            while (pilha.length > 1 && pilha[pilha.length - 2] !== '(') {
                const b = pilha.pop();
                const op = pilha.pop();
                const a = pilha.pop();
                pilha.pop();
                pilha.push(op === '+' ? a + b : a * b);
            }
        } else if ('+-*/'.includes(char)) {
            pilha.push(num, char);
            num = 0;
        }
    }
    return pilha[0];
}

console.log(calcularExpressao("(1 + (2 * 3))"));