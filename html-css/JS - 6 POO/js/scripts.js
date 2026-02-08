// 1 - metodos 
const animal = {
    nome: "Bob",
    latir: () => {
        console.log("Au Au")
    }
}

console.log(animal.nome)
animal.latir() // metodo

// 2 - aprofundando em metodos
const pessoa = {
    nome: "Bob",
    
    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.getNome());
pessoa.setNome("Jonas")
console.log(pessoa.getNome());

// 3 - prototype

const text = "asd"

console.log(Object.getPrototypeOf(text))

const boleano = true

console.log(Object.getPrototypeOf(boleano))

// 4 - mais sobre prototype
const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject)

console.log(mySecondObject);

// 5 - classes bascias 
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor alemão"
console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = "Buldog"

console.log(bulldog);

// 6 - funcao como classe - funcao construtiora 

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca 

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata")
console.log(bob);


// 7 - funcoes construtoras mesmo
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky);

// 8 - metodos na funcao construtiora 
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuuuuuu!")
}

husky.uivar()

// 9 - classes modernas Js
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome 
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff)
console.log(Object.getPrototypeOf(jeff))

// 10 - mais sobre classes 

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos 
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`)
    }
}

scania = new Caminhao(8, "Azul")
console.log(scania);
scania.descreverCaminhao()
 

// 12 - symbol 

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca 
        this.turbinas = turbinas
    }
}

const asas = Symbol()
Aviao.prototype[asas] = 2

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])

// 13 - getter e setter 
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo 
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Voce esta lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post","É um port de programacao")
console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programação, JavaScript, nxtjs"

console.log(myPost)

// 14 = HERANCA

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, cor) {
        super(patas, patas)
        this.cor = cor 
    }
}

const shark = new Lobo(4, "Cinza")
console.log(shark);

