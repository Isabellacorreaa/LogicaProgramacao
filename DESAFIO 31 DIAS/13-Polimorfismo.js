//Crie uma classe Funcionario com um método calcularSalario. Implemente subclasses como Desenvolvedor e Gerente que sobrescrevem esse método.

class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salarioBase + this.bonus;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salarioBase, adicional) {
        super(nome, salarioBase);
        this.adicional = adicional;
    }

    calcularSalario() {
        return this.salarioBase + this.adicional + 500;
    }
}


const funcionario = new Funcionario("Carlos", 3000);
const desenvolvedor = new Desenvolvedor("Ana", 3500, 800);
const gerente = new Gerente("Ricardo", 5000, 1200);

console.log(funcionario.calcularSalario());
console.log(desenvolvedor.calcularSalario()); 
console.log(gerente.calcularSalario());


//Implemente uma classe Transporte e subclasses como Carro, Avião e Barco, cada uma com seu método mover.


class Transporte {
    mover() {
        console.log("O transporte está se movendo.");
    }
}

class Carro extends Transporte {
    mover() {
        console.log("O carro está dirigindo na estrada.");
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("O avião está voando no céu.");
    }
}

class Barco extends Transporte {
    mover() {
        console.log("O barco está navegando no mar.");
    }
}

// Testando
const carro = new Carro();
const aviao = new Aviao();
const barco = new Barco();

carro.mover();
aviao.mover(); 
barco.mover();


//Crie uma superclasse Documento com um método exibirConteudo, e subclasses como PDF e Word que personalizem esse método.


class Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo genérico do documento.");
    }
}

class PDF extends Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo do documento PDF.");
    }
}

class Word extends Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo do documento Word.");
    }
}

const documento = new Documento();
const pdf = new PDF();
const word = new Word();

documento.exibirConteudo(); 
pdf.exibirConteudo();     
word.exibirConteudo();  


//Implemente um sistema de animais com uma superclasse Animal e métodos específicos em subclasses como Passaro e Peixe.

class Animal {
    emitirSom() {
        console.log("O animal fez um som.");
    }

    mover() {
        console.log("O animal se move.");
    }
}

class Passaro extends Animal {
    emitirSom() {
        console.log("O pássaro está cantando.");
    }

    mover() {
        console.log("O pássaro está voando.");
    }
}

class Peixe extends Animal {
    emitirSom() {
        console.log("O peixe não faz som audível.");
    }

    mover() {
        console.log("O peixe está nadando.");
    }
}

const animal = new Animal();
const passaro = new Passaro();
const peixe = new Peixe();

animal.emitirSom();
animal.mover();    

passaro.emitirSom();
passaro.mover();  

peixe.emitirSom();
peixe.mover();

//Use o polimorfismo para criar uma lista de diferentes formas geométricas (Quadrado, Círculo, etc.) e calcule suas áreas.

class Forma {
    calcularArea() {
        throw new Error("Método 'calcularArea' não implementado.");
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

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

const formas = [
    new Quadrado(4),
    new Circulo(5),
    new Retangulo(3, 6)
];

formas.forEach((forma, index) => {
    console.log(`Área da forma ${index + 1}: ${forma.calcularArea()}`);
});