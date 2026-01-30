// 1 - Number 

console.log(2);
console.log(typeof 2);
console.log(-2);
console.log(typeof -2);
console.log(5.9123);
console.log(typeof 5.9123);

// 2 - Operações aritimeticas
console.log((2+5)*2);
console.log(2+5*2);
console.log(2**4);

// 3 - especial numbers
console.log(3/0);
console.log(-3/0);
console.log(12 * 'asd');

// 4 - strings
console.log("Aqui vai um texto");
console.log('Outra forma de texto');
console.log(`Outra forma de texto diferente`);
console.log(typeof "texto")

// 5 - caracteres especiais 
console.log("aqui começa mas \nquebrei a linha")
console.log("aqui começa mas \ttem um espaçamento de tab a linha")

// 6 - concatenação
console.log("Oi," + " tudo" + " bem?")

// 7 - template string 
console.log(`A soma de 2 + 2 é ${2+2}`)

// 8 - boleanos 
console.log(10 == 1);
console.log(30 > 10);
console.log(typeof false);

// 9 - comparacoes 
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 == '10');
console.log(10 === '10');

// 10 - identico 
console.log(9 == '9');
console.log(9 === '9');
console.log(9 !== '9');

// 11 - operador logico (&&) -> AND (||)-> OR (!) -> NOT
console.log("OPERADORES LOGICOS");
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(2 > 1 || 1 === 0);
console.log(!(2 > 1 || 1 === 0));

// 12 - empty values 
console.log(typeof null, typeof undefined);
console.log(null == undefined, null === undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - pratica mudança de tipos
console.log("MUDANÇA DE TIPOS");
console.log(5 * null);
console.log("10" + 1);
console.log("10" - 1);
console.log()

