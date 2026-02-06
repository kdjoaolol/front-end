const lista = [1,2,3,4,5]

console.log(lista)
console.log(typeof lista)

const itens = ["Jv", 123, 123.4, []]

console.log(itens)
console.log(itens[0])

// 2 - propriedades lista 
const numbers = [5,4,2,1]

console.log(numbers.length);
console.log(numbers['length'])

const myName = "João victor"
console.log(myName.length)


const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

console.log(myName.toUpperCase());
console.log(typeof myName.toUpperCase);

console.log(myName.indexOf("o"))

// 5 - objetos 
const person = {
    name : "Jv",
    age: 31,
    job: "programador"
}

console.log(person)
console.log(person.name)
console.log(person.name.length)

// 6 - criando e deletando proprieradades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan"
}

console.log(car)

car.doors = 4 
delete car.engine;

console.log(car)

// 7 - mais sobre obj

const obj = {
    a: "teste", 
    key_b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj2)

// 8 - conhecendo melhor os obj 
console.log(Object.keys(obj))
console.log(Object.keys(obj2)) // index do python


console.log(Object.entries(obj2)) // enumerate do python


// 9 - mutação 

const a = {
    name: "Jv"
}

const b = a;

console.log(a);
console.log(b)

console.log(a === b);

a.age = 10;
console.log(b);

// 10 - loops em arrays 
const user = ["Joao", "Victor","Jonas", "Gabs"]

for(let i = 0; i < user.length; i++) {
    console.log(`Listando o usuario: ${user[i]}`)
}

// 11 - push and pop 
const array = ["a", "b", "c"]
array.push("d")
console.log(array);
const itemRemovido = array.pop()
console.log(array, itemRemovido);
array.push('z', 'x', 'y')

// 12 - shift e unshift (mesmo que pop e push so que no inicio)
const letters = ["a", "b", "c"]

const letter = letters.shift()
const letterLast = letters.pop()

console.log(letter, letters, letterLast);

letters.unshift('z', 'y', 'w')
letters.push('z', 'y', 'w')

console.log(letter, letters, letterLast);


// 13 - indexOf e lastIndexof

const fruts = ["Maça", "Banana", "Morango", "Banana"]

console.log(fruts.indexOf("Banana"))
console.log(fruts.lastIndexOf("Banana"))

console.log(fruts[fruts.lastIndexOf("Banana")])

// 14 - slice 
const arrayTesteSlice = ["a", "b", "c", "d"]

const subArray = arrayTesteSlice.slice(1,2 + 1)

console.log(arrayTesteSlice)
console.log(subArray)

console.log(arrayTesteSlice.slice(10,20))
console.log(arrayTesteSlice.slice(2))

// 15 - foreach
const nums = [1,2,3,4,5]

nums.forEach((numero) => { // parecido com o i for i in lista no python
    console.log(`o numero é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Python"},
    {title: "Terceito post", category: "Java"}
]

posts.forEach((post) => {
    console.log(`Exibindo post ${post.title}, categoria ${post.category}`)
})

// 16 - includes 
const brands = ["BMW", "VOLVO", "Fiat"]
console.log(brands.includes("Volvo"))
console.log(brands.includes("VOLVO"))

if(brands.includes("BMW")){
    console.log("Existe bmws")
}

// 17 - reverse -> modifica a ordem do array [-1] do python
const reverseTest = [1,2,3,4]
reverseTest.reverse() // modifica a lista original
console.log(reverseTest)

// 18 - TRIM STRING 
const trinsTest = "   testando \n "

console.log(trinsTest)
console.log(trinsTest.trim())
console.log(trinsTest.trim().length)

testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split();

console.log(arrayDaFrase);

// 21 - join
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

// 23 - rest operator
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

// 24 - for...of 
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args) {
        total += num;
    }
    return total
}

console.log(somaInfinita2(1,2,3,4,5,6,123,123,111111111))

// 25 - destructuring em objetos 
const userDetails = {
    firstName: "Jv",
    lastName: "Amaral",
    job: "Programador"
}

// const firstName = userDetails.firstName
// const lastName = userDetails.lastName
// const job = userDetails.job
// mesma coisa que 
const {firstName, lastName, job} = userDetails

// rename 
const {firstName: primeiro_nome, lastName: ultimo_nome, job: trabalho} = userDetails
console.log(primeiro_nome, ultimo_nome, trabalho)

// 26 - destructuiring com arrays 

const myList = ["Avião", "Moto", "Carro"]
const [veiculoA, veiculoB, veiculoC] = myList;

// 27 - JSON 
const myJson = '{"name": "João", "age": 31, "skills": ["PHP", "Python"]}'
console.log(myJson);

// 28 - json para objeto json 
const myObjectConverted = JSON.parse(myJson);
console.log(myObjectConverted);

console.log(myObjectConverted.skills);

// json invalido
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObjectConverted.isOpenToWork = true;

const myNewJson = JSON.stringify(myObjectConverted);

console.log(myNewJson);

console.log(typeof myNewJson);
