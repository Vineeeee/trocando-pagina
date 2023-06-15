let btn1 = document.querySelector("div:nth-child(1)")
let btn2 = document.querySelector("div:nth-child(3)")
let link1 = document.querySelector("div:nth-child(3) a")
let link2 = document.querySelector("div:nth-child(1) a")

let fundoDaImagem = document.querySelector("body")

if (fundoDaImagem.classList.contains("primeira-img")) {
    link2.classList.add("cinza")
}

btn2.addEventListener("click", function (){
    if (fundoDaImagem.classList.contains("primeira-img")) {
        fundoDaImagem.classList.remove("primeira-img")
        fundoDaImagem.classList.add("segunda-img")
        link2.classList.remove("cinza")
    }

    else if(fundoDaImagem.classList.contains("segunda-img")){
        fundoDaImagem.classList.remove("segunda-img")
        fundoDaImagem.classList.add("terceira-img")
    }

    else if(fundoDaImagem.classList.contains("terceira-img")){
        fundoDaImagem.classList.remove("terceira-img")
        fundoDaImagem.classList.add("quarta-img")
        link1.classList.add("cinza")
    }
})



btn1.addEventListener("click", function (){
    if (fundoDaImagem.classList.contains("quarta-img")) {
        fundoDaImagem.classList.remove("quarta-img")
        fundoDaImagem.classList.add("terceira-img")
        link1.classList.remove("cinza")
    }

    else if(fundoDaImagem.classList.contains("terceira-img")){
        fundoDaImagem.classList.remove("terceira-img")
        fundoDaImagem.classList.add("segunda-img")
    }

    else if(fundoDaImagem.classList.contains("segunda-img")){
        fundoDaImagem.classList.remove("segunda-img")
        fundoDaImagem.classList.add("primeira-img")
        link1.classList.remove("cinza")
        link2.classList.add("cinza")
    }
})


