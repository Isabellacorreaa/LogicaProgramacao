//Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.


let nomeCompleto = "João Silva Pereira";

let nomeDividido = nomeCompleto.split(" ");

console.log("Primeiro nome: " + nomeDividido[0]);


// Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let texto = "Eu estou aprendendo JavaScript";

if (texto.search("Java") !== -1) {
    console.log("A string contém a palavra 'Java'!");
} else {
    console.log("A string não contém a palavra 'Java'.");
}


//Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let frase = "  Olá, como você está?  ";

let fraseProcessada = frase.toUpperCase().trim();

console.log(fraseProcessada);


// Substitua a palavra "erro" por "correção" na string "Houve um erro no sistema.".

let frase = "Houve um erro no sistema.";

let novaFrase = frase.replace("erro", "correção");

console.log(novaFrase);


//Divida a frase "Eu amo JavaScript" em palavras separadas e exiba cada uma.

let frase = "Eu amo JavaScript";

console.log(frase.split("Eu")[0]);
console.log(frase.split("Amo")[1]);
console.log(frase.split("JavaScript")[2]);

//Valide se um URL começa com https:// e termina com .com.

let email = "cagueicookies@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email inválido!");
}