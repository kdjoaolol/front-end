function calculaPi(num_iter){
    let pi = 0 
    for(let contador = 0; contador < num_iter; contador = contador + 1){
        calc = Math.pow(-1, contador)/(2*contador + 1)
        pi += calc
        console.log(`Iteração ${contador + 1} pi = ${pi*4}`)    
    }

}

// calculaPi(prompt("Numero de interações"))
calculaPi(10);

const a = 10;
const b = 20;

function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(a,b)
console.log(resultado)

// 3 - escopo da funcao 

let y = 10;

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}
testandoEscopo()
console.log(`Y fora da função é ${y}`)

// 4 - arrow function 

const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow();

const paraOuImpar = (n) => {
    if(n%2 === 0) {
        console.log("Par")
        return // early return -> usado para poupar memoria 
    }
    console.log("Impar");
}

paraOuImpar(10);
paraOuImpar(5);

// 6 - mais sobre arrow functions 
const raizQuadrada = (x) => {
    return Math.sqrt(x) 
}
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => Math.sqrt(x)
console.log(raizQuadrada2(144))

const nome = "Jv";
if(nome === "Jv"){
    for(let x=0; x<=10; x+=1){
        console.log(`${nome} iter: ${x}`)
    }
}

const multiplication = function(m,n) {
    if(n === undefined) {
        return m*2
    } else {
        return m*n
    }
}

console.log(multiplication(4))
console.log(multiplication(4,4))

const greeting = (name) => {
    if(!name) {
        console.log("Olá!")
        return
    }
    console.log(`Olá ${name}`)
}

greeting()
greeting("João")

// 8 - valor defaul 
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Joao"))
console.log(customGreeting("João", "Bom dia"))

const repeatText = (text, repeat=3) => {
    for(let contador = 1; contador<=repeat;contador++){
        console.log(`Repetindo a ${contador}° vez`)
    }
}
repeatText()

// 9 = closure 
function sameFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }
    display()
}

sameFunction()

// 10 - mais sobre closure 

const multiplicaClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicaClosure(5)
const c2 = multiplicaClosure(6)

console.log(c1(5))
console.log(c1(10))

// 11 - recursão 
const untilTen = (n,m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)
        
        untilTen(x, m)
    }
}
untilTen(100,7)

function factorialNumber(num) {
    if(num === 0) {
        return 1
    } else {
        return num * factorialNumber(num - 1)
    }
}

const num = 6;
const result = factorialNumber(num);
console.log(`O fatorial do numero ${num} é ${result}`)