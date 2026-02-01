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