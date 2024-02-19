const resposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Palmeiras", 
  "Internacional", 
  "Atlético-MG", 
  "Botafogo",  
  "Corinthians", 
  "Grêmio ", 
  "Cruzeiro", 
  "Flamengo", 
  "Fluminense", 
  "São Paulo", 
  "Bragantino"
]

const fst = document.querySelector("#fst")
const scd = document.querySelector("#scd")
const thr = document.querySelector("#thr")
const fou = document.querySelector("#fou")

function prever() {

if(fst.value, scd.value, thr.value, fou.value == "") {
  alert("Preencha todas as informações")
  return
}

buttonPerguntar.setAttribute("disable", true)

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random
() * totalRespostas)

//console.log(respostas[numeroAleatorio])
resposta.innerHTML =respostas[numeroAleatorio]

resposta.style.opacity = 1;

setTimeout(function () {
  resposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disable")
}, 3000)

}

