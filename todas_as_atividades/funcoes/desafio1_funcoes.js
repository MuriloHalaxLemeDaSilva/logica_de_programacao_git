//atividade de function

let operacao = prompt("escolha uma opera��o:\n1.soma\n2.subtra��o\n3.divis�o\n4.multiplica��o\n").toLowerCase()

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

let numero1 =Number(prompt("digite o primeiro n�mero: "))
let numero2 = Number(prompt("digite o segundo n�mero: "))

if(operacao == "1" || operacao == "soma"){
    console.log(somar(numero1, numero2))
}

else if(operacao == "2" || operacao == "subtra��o"){
    console.log(subtrair(numero1, numero2))
}

else if(operacao == "3" || operacao =="divis�o"){
    console.log(dividir(numero1, numero2))
}

else if(operacao == "4" || operacao =="mutiplica��o"){
    console.log(mutiplicar(numero1, numero2))
}

else{
    console.log("insira uma opera��o v�lida!")
}
