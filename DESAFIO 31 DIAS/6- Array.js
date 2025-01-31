// Crie um array com suas três cores favoritas e adicione uma nova cor no final.

let coresFavoritas = ['azul', 'verde', 'roxo'];
coresFavoritas.push('laranja');

console.log(coresFavoritas);


//Use um loop para exibir todos os itens de um array de compras.

let compras = ['maçã', 'banana', 'leite', 'pão', 'queijo'];

for (let i = 0; i < compras.length; i++) {
    console.log(compras[i]);
}


//Dado um array de números [10, 20, 30, 40, 50], use o método slice para extrair os dois últimos números.

let numeros = [10, 20, 30, 40, 50];
let ultimosNumeros = numeros.slice(-2); // Extrai os dois últimos números

console.log(ultimosNumeros);


//Crie um array de tarefas e remova a primeira tarefa usando shift.

let tarefas = ['Estudar', 'Comprar alimentos', 'Limpar a casa', 'Ir ao supermercado'];

tarefas.shift();

console.log(tarefas);


//Use splice para substituir o terceiro item de um array por "Substituído".

let tarefas = ['Estudar', 'Comprar alimentos', 'Limpar a casa', 'Ir ao supermercado'];

tarefas.splice(2, 1, 'Substituído');

console.log(tarefas);


//Transforme um array de palavras em uma frase completa usando join.

let palavras = ['Eu', 'amo', 'programar', 'em', 'JavaScript'];

let frase = palavras.join(' ');

console.log(frase);