//Crie uma classe ContaBancaria que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.

class ContaBancaria {
  

    constructor() {
      this.#saldo = 0; // Inicializa o saldo como 0
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor; // Aumenta o saldo com o valor depositado
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log('Valor de depósito inválido!');
      }
    }
  

    sacar(valor) {
      if (valor <= 0) {
        console.log('Valor de saque inválido!');
      } else if (valor > this.#saldo) {
        console.log('Saldo insuficiente para saque.');
      } else {
        this.#saldo -= valor; 
        console.log(`Saque de R$ ${valor} realizado com sucesso.`);
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual: R$ ${this.#saldo}`);
    }
  }
  
  const conta = new ContaBancaria();
  conta.depositar(1000); // Depósito de 1000
  conta.sacar(500); // Saque de 500
  conta.consultarSaldo(); // Exibe o saldo restante
  conta.sacar(600);
  

  //Implemente uma classe Usuario que armazena uma senha privada e permite alterar a senha com validação.

  class Usuario {
    
    #senha;
  
  
    constructor(senhaInicial) {
     
      if (senhaInicial.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres.');
      }
      this.#senha = senhaInicial; 
    }
  

    alterarSenha(senhaAtual, novaSenha) {
      // Verifica se a senha atual fornecida está correta
      if (senhaAtual !== this.#senha) {
        console.log('Senha atual incorreta!');
        return;
      }
  
      
      if (novaSenha.length < 6) {
        console.log('A nova senha deve ter pelo menos 6 caracteres.');
        return;
      }
  
     
      this.#senha = novaSenha;
      console.log('Senha alterada com sucesso.');
    }
  

    validarSenha(senha) {
      return senha === this.#senha;
    }
  }
  

  const usuario = new Usuario('senha123');
  

  usuario.alterarSenha('senha123', 'novaSenha456'); 
  
  usuario.alterarSenha('senhaErrada', 'novaSenha789'); 
  
  usuario.alterarSenha('novaSenha456', '123'); 
  

  console.log(usuario.validarSenha('novaSenha456'));
  console.log(usuario.validarSenha('senha123'));

  
  //Crie uma classe ControleRemoto com métodos para ligar e desligar a TV, escondendo o estado interno.

  class ControleRemoto {
 
    #ligada;
  
 
    constructor() {
      this.#ligada = false; // Inicializa a TV como desligada
    }
  
   
    ligar() {
      if (!this.#ligada) {
        this.#ligada = true; // Altera o estado para ligado
        console.log('A TV foi ligada.');
      } else {
        console.log('A TV já está ligada.');
      }
    }
  
  
    desligar() {
      if (this.#ligada) {
        this.#ligada = false; // Altera o estado para desligado
        console.log('A TV foi desligada.');
      } else {
        console.log('A TV já está desligada.');
      }
    }
  
    
    estado() {
      if (this.#ligada) {
        console.log('A TV está ligada.');
      } else {
        console.log('A TV está desligada.');
      }
    }
  }
  

  const controle = new ControleRemoto();
  
  controle.estado(); 
  controle.ligar(); 
  controle.ligar(); 
  controle.estado(); 
  controle.desligar(); 
  controle.desligar(); 
  controle.estado();


  //Escreva uma classe Cofre que armazena valores privados e só permite acesso com uma senha correta.

  class Cofre {
    
    #senha;
    #valor;
  
    
    constructor(senhaInicial) {
      this.#senha = senhaInicial; // Define a senha inicial
      this.#valor = 0; // Inicializa o valor do cofre como 0
    }
  
    
    armazenarValor(senha, valor) {
      if (senha === this.#senha) {
        if (valor > 0) {
          this.#valor = valor;
          console.log(`Valor de R$ ${valor} armazenado com sucesso no cofre.`);
        } else {
          console.log('Valor inválido! Deve ser maior que 0.');
        }
      } else {
        console.log('Senha incorreta! Acesso negado.');
      }
    }
  
    
    consultarValor(senha) {
      if (senha === this.#senha) {
        console.log(`O valor no cofre é: R$ ${this.#valor}`);
      } else {
        console.log('Senha incorreta! Acesso negado.');
      }
    }
  
    
    alterarSenha(senhaAtual, novaSenha) {
      if (senhaAtual === this.#senha) {
        if (novaSenha.length >= 6) {
          this.#senha = novaSenha;
          console.log('Senha alterada com sucesso.');
        } else {
          console.log('A nova senha deve ter pelo menos 6 caracteres.');
        }
      } else {
        console.log('Senha incorreta! Acesso negado.');
      }
    }
  }
  

  const cofre = new Cofre('senha123');
  
  cofre.armazenarValor('senha123', 1000); 
  cofre.consultarValor('senha123'); 
  
  cofre.consultarValor('senhaErrada'); 
  
  cofre.alterarSenha('senha123', 'novaSenha456'); 
  cofre.alterarSenha('senhaErrada', 'novaSenha789');
  

  //Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.

  class CarrinhoDeCompras {
    #itens = [];
  
    adicionarItem(nome, preco) {
      this.#itens.push({ nome, preco });
    }
  
    removerItem(nome) {
      this.#itens = this.#itens.filter(item => item.nome !== nome);
    }
  
    listarItens() {
      this.#itens.forEach(item => console.log(`${item.nome} - R$ ${item.preco}`));
    }
  }
  
 
  const carrinho = new CarrinhoDeCompras();
  carrinho.adicionarItem('Camiseta', 50);
  carrinho.adicionarItem('Calça', 120);
  carrinho.listarItens();
  carrinho.removerItem('Camiseta');
  carrinho.listarItens();