//Converta um objeto JavaScript para JSON e exiba a string resultante.

const objeto = {
    nome: "João",
    idade: 25
  };
  
  const json = JSON.stringify(objeto);
  console.log(json);


//Crie um JSON representando uma lista de tarefas com campos como nome, prioridade e completo.

const tarefasJSON = `{
    "tarefas": [
      {
        "nome": "Comprar mantimentos",
        "prioridade": "alta",
        "completo": false
      },
      {
        "nome": "Estudar para a prova de matemática",
        "prioridade": "média",
        "completo": false
      },
      {
        "nome": "Ir ao banco",
        "prioridade": "baixa",
        "completo": true
      },
      {
        "nome": "Lavar a roupa",
        "prioridade": "média",
        "completo": false
      }
    ]
  }`;
  
  console.log(JSON.parse(tarefasJSON));

  //Simule uma API que retorna um JSON de informações de produtos e leia esses dados.


const produtosAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          produtos: [
            {
              id: 1,
              nome: "Camiseta",
              preco: 49.90,
              categoria: "Roupas"
            },
            {
              id: 2,
              nome: "Celular",
              preco: 1999.99,
              categoria: "Eletrônicos"
            },
            {
              id: 3,
              nome: "Livro",
              preco: 39.90,
              categoria: "Livros"
            }
          ]
        });
      }, 1000); 
    });
  };
  

  const lerProdutos = async () => {
    try {
      const resposta = await produtosAPI(); 
      console.log(resposta.produtos); 
    } catch (erro) {
      console.error("Erro ao ler produtos:", erro);
    }
  };
  

  lerProdutos();

  //Use JSON.parse() para converter uma string JSON em um objeto e acessar suas propriedades.


const produtosJSON = `{
    "produtos": [
      {
        "id": 1,
        "nome": "Camiseta",
        "preco": 49.90,
        "categoria": "Roupas"
      },
      {
        "id": 2,
        "nome": "Celular",
        "preco": 1999.99,
        "categoria": "Eletrônicos"
      },
      {
        "id": 3,
        "nome": "Livro",
        "preco": 39.90,
        "categoria": "Livros"
      }
    ]
  }`;
  
 
  const dadosProdutos = JSON.parse(produtosJSON);
  

  console.log(dadosProdutos.produtos);
  console.log(dadosProdutos.produtos[0].nome); 
  console.log(dadosProdutos.produtos[1].preco); 
  console.log(dadosProdutos.produtos[2].categoria);

  //Crie um objeto complexo em JavaScript, transforme-o em JSON e, em seguida, converta de volta para um objeto.


const usuario = {
    nome: "João Silva",
    idade: 30,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    },
    contatos: [
      {
        tipo: "email",
        valor: "joao.silva@example.com"
      },
      {
        tipo: "telefone",
        valor: "+55 11 98765-4321"
      }
    ],
    ativo: true
  };
  

  const usuarioJSON = JSON.stringify(usuario);
  
  console.log("Objeto em formato JSON:");
  console.log(usuarioJSON);
  

  const usuarioConvertido = JSON.parse(usuarioJSON);
  
  console.log("\nObjeto convertido de volta:");
  console.log(usuarioConvertido);
  

  console.log("\nNome do usuário:");
  console.log(usuarioConvertido.nome); 
  console.log("Endereço da rua:");
  console.log(usuarioConvertido.endereco.rua);