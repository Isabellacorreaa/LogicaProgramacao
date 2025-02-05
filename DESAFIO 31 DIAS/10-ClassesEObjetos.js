//Crie uma classe chamada Livro com atributos titulo, autor e ano. Adicione um método para exibir os detalhes do livro.

class Livro {
    
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }
  
    
    exibirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Ano: ${this.ano}`);
    }
  }
  
 
  const meuLivro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
  

  meuLivro.exibirDetalhes();

  //Implemente uma classe ContaBancaria com os métodos depositar e sacar.

  class ContaBancaria {
   
    constructor(titular, saldoInicial = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
 
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log("Valor do depósito deve ser maior que zero.");
      }
    }
  
    
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso.`);
      } else if (valor > this.saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
      } else {
        console.log("Valor do saque deve ser maior que zero.");
      }
    }
  
    
    exibirSaldo() {
      console.log(`Saldo atual da conta de ${this.titular}: R$ ${this.saldo}`);
    }
  }
  
 
  const minhaConta = new ContaBancaria("João", 500);
  

  minhaConta.exibirSaldo(); 
  minhaConta.depositar(200);  
  minhaConta.sacar(100);     
  minhaConta.sacar(700);      
  minhaConta.exibirSaldo();

  //Crie uma classe Pessoa com um método que exibe "Bem-vindo, [nome]!".

  class Pessoa {

    constructor(nome) {
      this.nome = nome;
    }
  
    exibirBoasVindas() {
      console.log(`Bem-vindo, ${this.nome}!`);
    }
  }
  

  const pessoa1 = new Pessoa("Carlos");
  
 
  pessoa1.exibirBoasVindas();


  class Calculadora {
   
    soma(a, b) {
      return a + b;
    }
  
 
    subtracao(a, b) {
      return a - b;
    }
  
 
    multiplicacao(a, b) {
      return a * b;
    }
  
  
    divisao(a, b) {
      if (b === 0) {
        console.log("Erro: Não é possível dividir por zero.");
        return undefined;
      }
      return a / b;
    }
  }
  
  
  const calc = new Calculadora();
  

  console.log("Soma: " + calc.soma(10, 5));
  console.log("Subtração: " + calc.subtracao(10, 5));
  console.log("Multiplicação: " + calc.multiplicacao(10, 5)); 
  console.log("Divisão: " + calc.divisao(10, 5));
  console.log("Divisão por zero: " + calc.divisao(10, 0));

  //Crie uma classe Agenda para armazenar e exibir contatos.

  class Agenda {
    constructor() {
      this.contatos = [];
    }
  
  
    adicionarContato(nome, telefone) {
      const contato = { nome, telefone };
      this.contatos.push(contato);
      console.log(`Contato de ${nome} adicionado com sucesso.`);
    }
  

    exibirContatos() {
      if (this.contatos.length === 0) {
        console.log("Nenhum contato na agenda.");
        return;
      }
  
      console.log("Lista de Contatos:");
      this.contatos.forEach((contato, index) => {
        console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
      });
    }
  

    buscarContato(nome) {
      const contato = this.contatos.find(c => c.nome.toLowerCase() === nome.toLowerCase());
      if (contato) {
        console.log(`Contato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
      } else {
        console.log(`Contato com o nome "${nome}" não encontrado.`);
      }
    }
  }
  
  
  const minhaAgenda = new Agenda();
  
  =
  minhaAgenda.adicionarContato("João", "1234-5678");
  minhaAgenda.adicionarContato("Maria", "9876-5432");
  minhaAgenda.adicionarContato("Carlos", "4567-8901");
  

  minhaAgenda.exibirContatos();
  
  minhaAgenda.buscarContato("Maria");
  
  minhaAgenda.buscarContato("Ana");