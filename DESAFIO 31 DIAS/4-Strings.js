let nome = 'João'
let sobrenome = "Silva"
let saudacao = 'Olá, ${nome} {sobrenome}'

let novaSaudacao = saudacao.replace("Olá", "Boa Tarde")
console.log(novaSaudacao)

let email = 'correaisabella199@gmail.com'
if (email.includes('@')) {
    console.log("Email valido")
} else {
    console.log("Email invalido")
}