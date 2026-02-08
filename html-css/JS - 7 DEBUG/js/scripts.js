// "use strict";

// opa = "teste" // strict nao deixa

// const undefined = 10; // strict nao deixa

// delete [].length; // strict nao deixa tambem

// 2 - console.log (forma de debugar mais "simples")

let a = 1
let b = 2 

if (a == 1) {
    a = b + 2
}

console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a)
}

if(a > 5) {
    a = 25
}
console.log(a)

// 3 - debugger

let c = 1 
let d = 2 

if(c == 1) {
    c = d + 2
}

// debugger;

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a)
}

 // 4 - tratamento de dados

function checkNumber(n) {
    const result = Number(n)
    if(Number.isNaN(result)) {
        console.log("Valor incorreto!")
        return;
    }

    console.log("Valor correto!")
    return result;
}
checkNumber(5)
checkNumber("5")
checkNumber("Cinco")

// 5 - exceptions 

let x = 10

if(x != 11) {
    // throw new Error("O valor de x nao pode ser diferente de 11!")
}

// 6 - try e catch
try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`)
}

// 7 - finaly 

try {
    const value = checkNumber("asd")
    if(!value) {
        throw new Error("Valores inválidos!")
    }
} catch(error) {
    console.log(`Opa, aconteceu um problema ${error}`)
} finally {
    console.log("O codigo foi executado!")
}

// 8 - assertion 

function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O arrei precisa ter elementros")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}


