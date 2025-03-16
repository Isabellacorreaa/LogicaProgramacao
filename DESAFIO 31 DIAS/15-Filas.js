//Implemente uma fila que gerencie o atendimento de clientes em um restaurante.

class FilaRestaurante {
    constructor() {
      this.fila = [];
    }
  

    entrarFila(nome) {
      this.fila.push(nome);
    }
  
  
    atenderCliente() {
      return this.fila.shift(); 
    }
  

    verificarFila() {
      return this.fila;
    }
  }
  

  const fila = new FilaRestaurante();
  fila.entrarFila('João');
  fila.entrarFila('Maria');
  fila.entrarFila('Carlos');
  
  console.log(fila.verificarFila());
  console.log(fila.atenderCliente()); 
  console.log(fila.verificarFila());

  

//Crie uma fila que armazene músicas em uma playlist e remova a música quando for tocada.

class Playlist {
    constructor() {
      this.musicas = [];
    }
  
    adicionarMusica(musica) {
      this.musicas.push(musica);
    }
  
    tocarMusica() {
      console.log(`Tocando: ${this.musicas.shift()}`);
    }
  }
  

  const playlist = new Playlist();
  playlist.adicionarMusica('Música 1');
  playlist.adicionarMusica('Música 2');
  playlist.tocarMusica();
  playlist.tocarMusica();



//Escreva uma função que use uma fila para simular uma fila de caixa de supermercado.

class CaixaSupermercado {
    constructor() {
      this.fila = [];
    }
  
   
    adicionarPessoa(nome) {
      this.fila.push(nome);
    }
  
  
    atenderPessoa() {
      if (this.fila.length > 0) {
        const pessoa = this.fila.shift(); // Remove e retorna a primeira pessoa da fila
        console.log(`${pessoa} foi atendido no caixa.`);
      } else {
        console.log("Não há mais ninguém na fila.");
      }
    }
  
   
    verificarFila() {
      return this.fila;
    }
  }
  

  const caixa = new CaixaSupermercado();
  caixa.adicionarPessoa('João');
  caixa.adicionarPessoa('Maria');
  caixa.adicionarPessoa('Carlos');
  
  console.log(caixa.verificarFila());
  caixa.atenderPessoa(); 
  caixa.atenderPessoa(); 
  console.log(caixa.verificarFila()); 

  //Use uma fila para implementar um sistema de envio de mensagens em lote.

  class SistemaEnvio {
    constructor() {
      this.fila = [];
    }
  
    adicionarMensagem(mensagem) {
      this.fila.push(mensagem);
    }
  
    enviarMensagem() {
      console.log(this.fila.length > 0 ? `Mensagem enviada: ${this.fila.shift()}` : "Sem mensagens.");
    }
  }
  

  const sistema = new SistemaEnvio();
  sistema.adicionarMensagem('Mensagem 1');
  sistema.adicionarMensagem('Mensagem 2');
  sistema.enviarMensagem(); 
  sistema.enviarMensagem();


  //Crie uma fila que armazene processos pendentes e os execute na ordem de chegada.

  class FilaDeProcessos {
    constructor() {
      this.fila = [];
    }
  

    adicionarProcesso(processo) {
      this.fila.push(processo);
    }
  

    executarProcesso() {
      if (this.fila.length > 0) {
        const processo = this.fila.shift();
        console.log(`Executando processo: ${processo}`);
      } else {
        console.log("Não há processos pendentes.");
      }
    }
  }
  

  const filaProcessos = new FilaDeProcessos();
  filaProcessos.adicionarProcesso('Processo 1');
  filaProcessos.adicionarProcesso('Processo 2');
  filaProcessos.adicionarProcesso('Processo 3');
  
  filaProcessos.executarProcesso();
  filaProcessos.executarProcesso(); 