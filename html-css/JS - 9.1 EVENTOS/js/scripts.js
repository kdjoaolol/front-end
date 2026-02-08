// 1 - adicionando enventos 

const btn = document.querySelector("#my-button")

btn.addEventListener("click", () => {
    console.log("Clickou aqui!")
})

const secondBtn = document.querySelector('#btn')

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento 

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - progragação 
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// 5 - cancelando evento padrão
const a = document.querySelector("#prevent")
a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Skipou o evento")
})

// 6 - eventos nas teclas 
document.addEventListener("keyup", (event) => {
    console.log(event.key)
})

document.addEventListener("keydown", (event) => {
    console.log(event.key)
})

// 7 - eventos de mouse 
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão!")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botão!")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("doubleclick!")
})

// 8 - movimento do mouse 
// document.addEventListener("mousemove", (e) => {
//     // console.log(`No eixo X: ${e.x}`)
//     // console.log(`No eixo Y: ${e.y}`)
// })

// 9 - evento de scroll 
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px")
    }
})

// 10 - evento de focus/blur

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entoru no focus");
    
})

input.addEventListener("blur", (e) => {
    console.log("saiu do focus");
    
})

// 11 - evento de carregamento 

window.addEventListener("load", () => {
    console.log("A pagina carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
})


// 11 - debounce

const debounce = (f, delay) => {
    let timeout

    return (...argumentos) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            f.apply(argumentos)
        }, delay)
    }
}


window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400))
