//atividade de function

let operacao = prompt("escolha uma operação:\n1.soma\n2.subtração\n3.divisão\n4.multiplicação\n").toLowerCase()

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function mutiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

let numero1 =Number(prompt("digite o primeiro número: "))
let numero2 = Number(prompt("digite o segundo número: "))

if(operacao == "1" || operacao == "soma"){
    console.log(somar(numero1, numero2))
}

else if(operacao == "2" || operacao == "subtração"){
    console.log(subtrair(numero1, numero2))
}

else if(operacao == "3" || operacao =="divisão"){
    console.log(dividir(numero1, numero2))
}

else if(operacao == "4" || operacao =="mutiplicação"){
    console.log(mutiplicar(numero1, numero2))
}

else{
    console.log("insira uma operação válida!")
}
