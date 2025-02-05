//Use um loop for para imprimir os números de 1 a 10 no console.

for (let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
}

//Crie uma lista de nomes e use um for para exibir cada nome.

let nomes = {'João', 'Maria', 'Pedro'}
for (let i = 0; i < nomes.length; i++)
    console.log (nomes[i]);

//Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeros = [3, 8, 12, 5, 7, 14];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) 
}
console.log(`Numeros maior que 10 encontrado: ${numeros[i]}`);
break;

//Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador --;
}
console.log("Lançamento!");

//Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).

function calcularFatorial(n) {
    let fatorial = 1
    for (let i = n; i> 0; i--) 
    {fatorial *= i;}
    return fatorial;
    }
    console.log(calcularFatorial(5));