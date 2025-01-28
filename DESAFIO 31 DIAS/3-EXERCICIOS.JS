let numero = 15; 

let resultado = numero > 10 && numero < 20;

console.log(resultado);


let idade = 17; 

let podeVotar = idade >= 16;

if (podeVotar) {
  console.log("A pessoa pode votar.");
} else {
  console.log("A pessoa não pode votar.");

}


let nota = 85; 

let resultado;

if (nota >= 90) {
  resultado = "Aprovado com A";
} else if (nota >= 70) {
  resultado = "Aprovado com B";
} else {
  resultado = "Reprovado";
}

console.log(resultado);

let saldo = -50; 

if (saldo > 0) {
  console.log("Saldo positivo");
} else if (saldo === 0) {
  console.log("Sem saldo");
} else {
  console.log("Saldo negativo");
}


let luzLigada = false;

if (!luzLigada) { 
  console.log("Luz apagada. Ligando a luz...");
  luzLigada = true; // liga a luz
} else {
  console.log("A luz já está ligada.");
}

console.log("Estado da luz:", luzLigada ? "Ligada" : "Apagada");