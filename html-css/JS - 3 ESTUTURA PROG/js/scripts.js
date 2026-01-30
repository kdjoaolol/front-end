// 1 - variaveis 
let nome = "João Victor";

console.log(nome);

nome = "Jv";

console.log(nome);

const idade = 31;
console.log(idade);

// idade = 29; não podemos fazer isso

console.log(typeof nome, typeof idade);

// 2 - mais sobre variaveis  (o let ele muda ao longo do codigo e o const nao)
let a = 10, b = 20, c = 30;

const nomecompleto = "Joao victor";
const nomeCompleto = "JV";

console.log(nomeCompleto, nomecompleto);

let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste)

// 3 - funcções jp | prompt 
// const age = prompt("Digite sua idade: ") // parecido com o input do python
// console.log(`Voce tem ${age} anos`)

// 4 - alert (como o prompt, nao usamos no profissional)
// alert(`Voce tem ${age} anos`)

// 5 - funções math.x
console.log(Math.max(5,3,1,10));
console.log(Math.floor(5.7));
console.log(Math.ceil(5.1));

// 6 - função console
console.log()
console.error("Error! gerado manualmente")
console.warn("Aviso! gerado manualmente")

// 7 - estrutura condicional IF 
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!")
}

const user = "João"

if(user === "João") {
    console.log("Olá João")
}

if(user === "maria") {
    console.log("Olá maria")
}

// 8 - ELSE 
const loggedIn = false

if(loggedIn) {
    console.log("Logado com sucesso!")
} else {
    console.log("Faça o login!")
}

const q = 10 
const w = 15

if(q > 5 && w > 20) {
    console.log("Numeros mais altos")
} else {
    console.log("Numeros nao são mais altos")
}

// 9 - else if 
if(1 > 2){
    console.log("Teste")
} else if (2 > 3){
  console.log("Teste 2")  
} else if(5 > 1){
    console.log("Agora foi")
}

const userName = "Jv"
const userAge = 31

if(userName === "José"){
    console.log("Bem vindo josé")
} else if(userName === "Jv") {
    console.log("Olá joão")
} else {
    console.log("Não é nenhum outro da base")
}



