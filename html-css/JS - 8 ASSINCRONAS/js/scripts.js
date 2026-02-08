// // 1 - setTimeout 

// console.log("Ainda não executou!")

// setTimeout(() => {
//     console.log("Requisição assincrona!")
// }, 2000) // 2 segundos

// console.log("Ainda não executou 2!")

// // 2 - setInterval

// console.log("Ainda não executou(Set interval)!")

// // setInterval(() => {
// //     console.log("Requisição assincrona (Set interval)!")
// // }, 2000) // 2 segundos não para a execução

// console.log("Ainda não executou 2(Set interval)!")

// // 3 - promessas 
// const promessa = Promise.resolve(5 + 5)

// console.log("Algum codigo")

// promessa.then(value => {
//     console.log("A soma é ", value)
//     return value
// })
// .then((value) => value - 1)
// .then((value) => console.log(value))

// console.log("Outro codigo")

// // 4 - falha no promise 

// Promise.resolve(5 * "abc").then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("Valores inválidos")
//     }
// })
// .catch((error) => {
//     console.log(`Um erro ocorreu ${error}`)
//     }
// )

// //  5 - rejeição 
// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if(n > 10) {
//             resolve(`O numero é maior que 10`)
//         } else {
//             reject(new Error("Numero muito baixo"));
//         }
//     })
// }


// const a = checkNumber(20)
// const b = checkNumber(10)

// console.log(a,b)

// a.then((v) => console.log(`O Resultado é ${v}`)).catch((error) => {
//     console.log(`Um erro ocorreu: ${error}`)
// })

// 6 - Resolvendo varias promessas  (Fila de promessas)
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 3000)
// })

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//     if (30 > 10) {
//         resolve(30)
//     } else {
//         reject("Error!")
//     }
// })

// p1.then((valor) => console.log(valor))
// p2.then((valor) => console.log(valor))
// p3.then((valor) => console.log(valor))

// Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 7 - async funcitons 

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2,4).then((value) => {
    console.log(`A soma é: ${value}`)
    }
)

// 8 - async com await 
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveiu a promessa")
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("Chamando a Promise e epserando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();

// 9 - gerenators 
function* guardaResultado() {
    yield 1
    yield 2
    yield 3
}
const dado = guardaResultado()
console.log(dado.next().value)
console.log(dado.next().value)
console.log(dado.next().value)