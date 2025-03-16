//Crie uma árvore para representar uma hierarquia organizacional (CEO - Diretores - Gerentes - Analistas).

class Pessoa {
    constructor(nome, cargo) {
      this.nome = nome;
      this.cargo = cargo;
      this.subordinados = []; 
    }
  
  
    adicionarSubordinado(pessoa) {
      this.subordinados.push(pessoa);
    }
  

    exibirHierarquia(indice = 0) {
      console.log(' '.repeat(indice) + `${this.cargo}: ${this.nome}`);
      this.subordinados.forEach(subordinado => subordinado.exibirHierarquia(indice + 2));
    }
  }
  

  const ceo = new Pessoa('João', 'CEO');
  const diretor1 = new Pessoa('Maria', 'Diretora');
  const diretor2 = new Pessoa('Carlos', 'Diretor');
  const gerente1 = new Pessoa('Ana', 'Gerente');
  const gerente2 = new Pessoa('Pedro', 'Gerente');
  const analista1 = new Pessoa('Lucas', 'Analista');
  const analista2 = new Pessoa('Fernanda', 'Analista');
  

  ceo.adicionarSubordinado(diretor1);
  ceo.adicionarSubordinado(diretor2);
  diretor1.adicionarSubordinado(gerente1);
  diretor2.adicionarSubordinado(gerente2);
  gerente1.adicionarSubordinado(analista1);
  gerente2.adicionarSubordinado(analista2);
  

  ceo.exibirHierarquia();
  

//Implemente uma função para contar o número total de nós em uma árvore.

class Pessoa {
    constructor(nome, cargo) {
      this.nome = nome;
      this.cargo = cargo;
      this.subordinados = [];
    }
  
    adicionarSubordinado(pessoa) {
      this.subordinados.push(pessoa);
    }
  
    
    contarNos() {
      let total = 1; 
      for (let subordinado of this.subordinados) {
        total += subordinado.contarNos(); 
      }
      return total;
    }
  }
  
 
  const ceo = new Pessoa('João', 'CEO');
  const diretor1 = new Pessoa('Maria', 'Diretora');
  const diretor2 = new Pessoa('Carlos', 'Diretor');
  const gerente1 = new Pessoa('Ana', 'Gerente');
  const gerente2 = new Pessoa('Pedro', 'Gerente');
  const analista1 = new Pessoa('Lucas', 'Analista');
  const analista2 = new Pessoa('Fernanda', 'Analista');
  

  ceo.adicionarSubordinado(diretor1);
  ceo.adicionarSubordinado(diretor2);
  diretor1.adicionarSubordinado(gerente1);
  diretor2.adicionarSubordinado(gerente2);
  gerente1.adicionarSubordinado(analista1);
  gerente2.adicionarSubordinado(analista2);
  

  console.log(ceo.contarNos());

  //Crie uma árvore genealógica e implemente um método para listar todos os descendentes de um nó.

  class Pessoa {
    constructor(nome, parentesco) {
      this.nome = nome;
      this.parentesco = parentesco; 
      this.filhos = [];
    }
  

    adicionarFilho(filho) {
      this.filhos.push(filho);
    }
  
   
    listarDescendentes() {
      let descendentes = [];
  
   
      for (let filho of this.filhos) {
        descendentes.push(filho.nome);
        
        descendentes = descendentes.concat(filho.listarDescendentes());
      }
  
      return descendentes;
    }
  }
  

  const avoPaterno = new Pessoa('Carlos', 'Avô Paterno');
  const avoMaterno = new Pessoa('Ana', 'Avó Materna');
  
  const pai = new Pessoa('Ricardo', 'Pai');
  const mae = new Pessoa('Mariana', 'Mãe');
  
  const filho1 = new Pessoa('Lucas', 'Filho');
  const filho2 = new Pessoa('Fernanda', 'Filha');
  
 
  avoPaterno.adicionarFilho(pai);
  avoMaterno.adicionarFilho(mae);
  pai.adicionarFilho(filho1);
  pai.adicionarFilho(filho2);
  

  console.log(pai.listarDescendentes());

  //Implemente uma busca em profundidade e largura para encontrar um nó com um valor específico.
  
  
  class Pessoa {
    constructor(nome, parentesco) {
      this.nome = nome;
      this.parentesco = parentesco;
      this.filhos = [];
    }
  
   
    adicionarFilho(filho) {
      this.filhos.push(filho);
    }
  
    
    buscarDFS(nome) {
      if (this.nome === nome) {
        return this;  
      }
  
     
      for (let filho of this.filhos) {
        const resultado = filho.buscarDFS(nome);
        if (resultado) {
          return resultado;
        }
      }
  
      return null;  
    }
  
   
    buscarBFS(nome) {
      const fila = [this]; 
  
      while (fila.length > 0) {
        const pessoaAtual = fila.shift();
        if (pessoaAtual.nome === nome) {
          return pessoaAtual; 
        }
  
        // Adiciona os filhos à fila
        fila.push(...pessoaAtual.filhos);
      }
  
      return null;  
    }
  }
  
  
  const avoPaterno = new Pessoa('Carlos', 'Avô Paterno');
  const avoMaterno = new Pessoa('Ana', 'Avó Materna');
  
  const pai = new Pessoa('Ricardo', 'Pai');
  const mae = new Pessoa('Mariana', 'Mãe');
  
  const filho1 = new Pessoa('Lucas', 'Filho');
  const filho2 = new Pessoa('Fernanda', 'Filha');
  

  avoPaterno.adicionarFilho(pai);
  avoMaterno.adicionarFilho(mae);
  pai.adicionarFilho(filho1);
  pai.adicionarFilho(filho2);
  

  console.log(avoPaterno.buscarDFS('Lucas'));
  console.log(avoPaterno.buscarBFS('Fernanda'));