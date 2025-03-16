//Implemente uma função que simula o carregamento de dados de um banco usando setTimeout e Promises.

function carregarDadosDoBanco() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const sucesso = true; 
  
        if (sucesso) {
          const dados = { id: 1, nome: "João", idade: 30 };
          resolve(dados); 
        } else {
          reject("Erro ao carregar os dados do banco!"); 
        }
      }, 3000); 
    });
  }
  

  carregarDadosDoBanco()
    .then(dados => {
      console.log("Dados carregados:", dados);
    })
    .catch(erro => {
      console.error(erro);
    });

//Escreva uma função que simule a espera por um evento usando setTimeout com Async/Await.

function esperarEvento() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Evento ocorrido!");
        resolve("Evento completado!");
      }, 3000); // 
    });
  }
  
  async function executar() {
    console.log("Aguardando o evento...");
    
    const resultado = await esperarEvento(); 
    
    console.log(resultado); 
  }
  
 
  executar();

  //Crie uma API falsa que retorne dados de produtos com atraso simulado e exiba os resultados no console.

  function apiFalsa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const produtos = [
          { id: 1, nome: "Produto A", preco: 100 },
          { id: 2, nome: "Produto B", preco: 150 },
          { id: 3, nome: "Produto C", preco: 200 },
        ];
        resolve(produtos); 
      }, 3000);
    });
  }
  
  
  async function buscarProdutos() {
    console.log("Aguardando a resposta da API...");
    
    const produtos = await apiFalsa(); 
  
    console.log("Dados recebidos da API:");
    console.log(produtos); 
  }
  
 
  buscarProdutos();

  //Escreva uma função que execute três tarefas sequenciais usando Promises e Async/Await.

  function tarefa1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarefa 1 concluída");
        resolve("Resultado da Tarefa 1");
      }, 1000); 
    });
  }
  
  function tarefa2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarefa 2 concluída");
        resolve("Resultado da Tarefa 2");
      }, 2000); 
    });
  }
  
  function tarefa3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarefa 3 concluída");
        resolve("Resultado da Tarefa 3");
      }, 3000); 
    });
  }
  
  
  async function executarTarefas() {
    console.log("Iniciando as tarefas...");
  
    const resultado1 = await tarefa1(); 
    console.log(resultado1);
  
    const resultado2 = await tarefa2(); 
    console.log(resultado2);
  
    const resultado3 = await tarefa3(); 
    console.log(resultado3);
  
    console.log("Todas as tarefas foram concluídas.");
  }
  

  executarTarefas();