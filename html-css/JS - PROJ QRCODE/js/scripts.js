
// function getUrl() {

// }

const btnSearch = document.querySelector("#submit-btn")
const formSearch = document.querySelector("#form-search")

formSearch.addEventListener("submit", (e) => {
    e.preventDefault()
    const linkUrl = document.querySelector("#search")
    console.log(linkUrl.value)
})

