
let Hora = 17

if(Hora >= 6 && Hora <= 12) {
  console.log('Bom dia!');
}else if (Hora >=13 && Hora <=18) {
  console.log('Boa Tarde!');
}
else {
  console.log('Boa Noite!');
}



let mêses = 3 

switch (mêses)
{
case 1: 
console.log('Janeiro');
break;

case 2:
  console.log('Fevereiro')
  break;

  case 3:
    console.log('Março');
    break;
}
   

let idade = 18;
let mensagem = idade >= 18 ? "Pode dirigir!" : "Não pode dirigir!";

console.log(mensagem);



let saldo = 100; 

let resultado = saldo > 0 ? "Saldo positivo" : "Saldo negativo";

console.log(resultado);



let numero = 10;

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
  

let saldo = 1000; 
let opcaoEscolhida = 2;

console.log("Escolha uma opção:");
console.log("1 - Sacar");
console.log("2 - Depositar");
console.log("3 - Ver Saldo");

switch(opcaoEscolhida) {
    case 1: 
        let valorSaque = 200; 
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Você sacou R$ ${valorSaque}. Novo saldo: R$ ${saldo}`);
        } else {
            console.log("Saldo insuficiente!");
        }
        break;

    case 2:
        let valorDeposito = 500; 
        saldo += valorDeposito;
        console.log(`Você depositou R$ ${valorDeposito}. Novo saldo: R$ ${saldo}`);
        break;

    case 3:
        console.log(`Seu saldo atual é: R$ ${saldo}`);
        break;

    default:
        console.log("Opção inválida! Tente novamente.");
}