//Implemente um grafo para representar rotas entre cidades.

class Grafo {
    constructor() {
        this.cidades = {};
    }

    adicionarRota(cidade1, cidade2) {
        if (!this.cidades[cidade1]) this.cidades[cidade1] = [];
        if (!this.cidades[cidade2]) this.cidades[cidade2] = [];
        this.cidades[cidade1].push(cidade2);
        this.cidades[cidade2].push(cidade1);
    }

    mostrarRotas() {
        for (let cidade in this.cidades) {
            console.log(`${cidade}: ${this.cidades[cidade].join(", ")}`);
        }
    }
}


const grafo = new Grafo();
grafo.adicionarRota("São Paulo", "Rio de Janeiro");
grafo.adicionarRota("São Paulo", "Belo Horizonte");
grafo.adicionarRota("Rio de Janeiro", "Vitória");

grafo.mostrarRotas();


//Crie uma função para verificar se dois nós estão conectados em um grafo.

class Grafo {
    constructor() {
        this.cidades = {};
    }

    adicionarRota(cidade1, cidade2) {
        if (!this.cidades[cidade1]) this.cidades[cidade1] = [];
        if (!this.cidades[cidade2]) this.cidades[cidade2] = [];
        this.cidades[cidade1].push(cidade2);
        this.cidades[cidade2].push(cidade1); 
    }


    estaoConectados(cidade1, cidade2) {
    
        const visitados = new Set();

        const dfs = (cidade) => {
            if (cidade === cidade2) return true;
            visitados.add(cidade);
            for (let vizinho of this.cidades[cidade] || []) {
                if (!visitados.has(vizinho) && dfs(vizinho)) {
                    return true;
                }
            }
            return false;
        };

        return dfs(cidade1);
    }

    mostrarRotas() {
        for (let cidade in this.cidades) {
            console.log(`${cidade}: ${this.cidades[cidade].join(", ")}`);
        }
    }
}


const grafo = new Grafo();
grafo.adicionarRota("São Paulo", "Rio de Janeiro");
grafo.adicionarRota("São Paulo", "Belo Horizonte");
grafo.adicionarRota("Rio de Janeiro", "Vitória");

console.log(grafo.estaoConectados("São Paulo", "Vitória")); 
console.log(grafo.estaoConectados("São Paulo", "Curitiba")); 

//Implemente um grafo para modelar um sistema de amizades em uma rede social.


class RedeSocial {
    constructor() {
        this.amigos = {};  
    }


    adicionarAmizade(pessoa1, pessoa2) {
        if (!this.amigos[pessoa1]) this.amigos[pessoa1] = [];
        if (!this.amigos[pessoa2]) this.amigos[pessoa2] = [];
        this.amigos[pessoa1].push(pessoa2);
        this.amigos[pessoa2].push(pessoa1);
    }


    saoAmigos(pessoa1, pessoa2) {
        return this.amigos[pessoa1]?.includes(pessoa2);
    }
}


const rede = new RedeSocial();
rede.adicionarAmizade("Alice", "Bob");
rede.adicionarAmizade("Alice", "Carlos");

console.log(rede.saoAmigos("Alice", "Bob"));
console.log(rede.saoAmigos("Bob", "Carlos"));