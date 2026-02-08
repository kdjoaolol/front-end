// 1 - movendo-se pelo DOM (porem essa seleção é muito complexa)

console.log(document.body)
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1])

// 2 - seletores de elementos [por tags]
console.log(document.getElementsByTagName("h2"))

const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3 - seletores de elementos [por id]

const title = document.getElementById("title")
console.log(title)
title.setAttribute("class", 'bg-red')

// 4 - selecionando elementros por classe
const produts = document.getElementsByClassName("product")
console.log(produts);

// 5 - queryselectorall (mais usado na atualidade) CSS
const produtsQuery = document.querySelectorAll(".product")

console.log(produtsQuery);

const mainContaier = document.querySelector("#main-container")
console.log(mainContaier);

// 6 - inserfbefore
const p = document.createElement("p")
console.log(p)

const header = title.parentElement
console.log(header)

header.insertBefore(p, title);

// 7 - appendChild

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replacechild 

const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo!"

header.replaceChild(h2, title)

// 9 - createTextNodfe 
const myText = document.createTextNode("Agora vamos colocar mais um titulo");
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)

mainContaier.appendChild(h3)

// 10 - trabalhando com atributos 

const firstLink = navLinks.querySelector("a") // pega somnete o primeiro

console.log(firstLink)

firstLink.setAttribute("href", "https://google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// 11-  altura e largura 
const footer = document.querySelector("footer")
console.log(footer.offsetWidth, footer.offsetHeight);

console.log(footer.clientWidth, footer.clientHeight);

// 12 - posição do elemento 
const product1 = produts[0]

console.log(product1.getBoundingClientRect())

// 13 - css com js 

mainContaier.style.color = "red"
mainContaier.style.backgroundColor = "#ccc"
mainContaier.style.paddingBottom = "50px"

// 14 - styles 

for (const li of listItens) {
    li.style.backgroundColor = "green"
}

