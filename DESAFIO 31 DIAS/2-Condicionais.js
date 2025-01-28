let Hora = 20;

if (Hora < 12) {
  console.log("Bom dia!");
} else if (Hora < 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa Noite!");
}

let DiaDaSemana = 2;

switch (DiaDaSemana) {
  case 1:
    console.log("Segunda-Feira");
    break;

  case 2:
    console.log("Terça-Feira");
    break;

  case 3:
    console.log("Quarta-Feira");
    break;
    deafult:
    console.log('Dia Invalido')
}
