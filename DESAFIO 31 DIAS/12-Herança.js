//Crie uma classe Veiculo e duas subclasses: Carro e Moto. Adicione métodos específicos para cada subclasse.

class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarInfo() {
      console.log(`${this.marca} ${this.modelo}`);
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, modelo, numeroDePortas) {
      super(marca, modelo);
      this.numeroDePortas = numeroDePortas;
    }
  
    abrirPortas() {
      console.log(`Abrindo ${this.numeroDePortas} portas do carro.`);
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, modelo, tipoDeGuidão) {
      super(marca, modelo);
      this.tipoDeGuidão = tipoDeGuidão;
    }
  
    empinar() {
      console.log(`Empinando a moto com guidão ${this.tipoDeGuidão}.`);
    }
  }
  
 
  const carro = new Carro('Toyota', 'Corolla', 4);
  carro.mostrarInfo();
  carro.abrirPortas();
  
  const moto = new Moto('Honda', 'CB500', 'reto');
  moto.mostrarInfo();
  moto.empinar();

  //Implemente uma classe Funcionario e uma subclasse Gerente que adicione um atributo setor.

  class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    mostrarInfo() {
      console.log(`${this.nome}, R$ ${this.salario}`);
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
      super(nome, salario);
      this.setor = setor;
    }
  
    mostrarSetor() {
      console.log(`Setor: ${this.setor}`);
    }
  }
  
 
  const gerente = new Gerente('Carlos', 5000, 'Vendas');
  gerente.mostrarInfo();
  gerente.mostrarSetor();

  //Crie uma superclasse Forma com um método para calcular área, e subclasses como Quadrado e Círculo que sobrescrevam esse método.

  class Forma {
    calcularArea() {
      console.log('Método não implementado');
    }
  }
  
  class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado * this.lado;
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio * this.raio;
    }
  }
  

  const quadrado = new Quadrado(4);
  console.log('Área do quadrado:', quadrado.calcularArea());
  
  const circulo = new Circulo(3);
  console.log('Área do círculo:', circulo.calcularArea());

  //Escreva uma classe Animal e subclasses como Cachorro e Gato, cada uma com métodos específicos.


  class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(`${this.nome} diz: Au Au!`);
    }
  
    correr() {
      console.log(`${this.nome} está correndo.`);
    }
  }
  
  class Gato extends Animal {
    falar() {
      console.log(`${this.nome} diz: Miau!`);
    }
  
    dormir() {
      console.log(`${this.nome} está dormindo.`);
    }
  }
  
  const cachorro = new Cachorro('Rex');
  cachorro.falar();
  cachorro.correr();
  
  const gato = new Gato('Mimi');
  gato.falar();
  gato.dormir();

  //Crie uma classe Conta e uma subclasse ContaPoupanca que adicione juros ao saldo.

  class Conta {
    constructor(saldo) {
      this.saldo = saldo;
    }
  
    consultarSaldo() {
      console.log(`Saldo: R$ ${this.saldo}`);
    }
  }
  
  class ContaPoupanca extends Conta {
    constructor(saldo, juros) {
      super(saldo);
      this.juros = juros;
    }
  
    aplicarJuros() {
      this.saldo += this.saldo * (this.juros / 100);
      console.log(`Após aplicar juros, o saldo é: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  

  const conta = new Conta(1000);
  conta.consultarSaldo();
  
  const contaPoupanca = new ContaPoupanca(1000, 5);
  contaPoupanca.consultarSaldo();
  contaPoupanca.aplicarJuros();