//pergunta1
console.log("escolha o idioma de entrada: \n1-English\n2-Portugu�s\n3-Deutsch\n4-Espa�ol")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "english" || pergunta1 == "1"):
    console.log("Welcome!")
    break;
     case (pergunta1 == "espa�ol" || pergunta1 == "4"):
    console.log("bienvenido!")
    break;
     case (pergunta1 == "deutsch" || pergunta1 == "3"):
    console.log("Willkommen!")
    break;
     case (pergunta1 == "portugu�s" || pergunta1 == "2"):
    console.log("Bem-vindo!")
    break;
    default:
    console.log("esse idioma n�o � v�lido")
    break
}

//pergunta2
console.log("escolha um n�mero de dia da semana: \n-1\n-2\n-3\n-4")
let pergunta2 = Number(prompt("= "))
switch(pergunta2){
    case 1:
    console.log("seu dia � domingo!")
    break;
    case 2:
    console.log("seu dia � segunda-feira!")
    break;
    case 3:
    console.log("seu dia � ter�a-feira!")
    break;
    case 4:
    console.log("seu dia � quarta-feira!")
    break;
    case 5:
    console.log("seu dia � quinta-feira!")
    break;
    case 6:
    console.log("seu dia � sexta-feira!")
    break;
    case 7:
    console.log("seu dia � s�bado!")
    break;
    default:
        console.log("esse dia n�o � v�lido!")
    
}
//pergunta3
console.log("sorteie seu ve�culo seu ve�culo: \n1.\n2.\n3.\n4.\n5.\n6.")
let pergunta3 = Number(prompt("= "))
switch(pergunta3){
    case 1:
    console.log("Carro!")
    break;
    case 2:
    console.log("Trator!")
    break;
    case 3:
    console.log("Caminh�o!")
    break;
    case 4:
    console.log("Jato!")
    break;
    case 5:
    console.log("Motocicleta!")
    break;
    case 6:
    console.log("Monstertruck!")
    break;
   
    default:
        console.log("esse n�o � um n�mero v�lido n�o � v�lido!")}
        
//pergunta4
console.log("n�vel de urg�ncia: \n1-Baixa-\n2-M�dia\n3-Alta")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "baixa" || pergunta1 == "1"):
    console.log("A urg�ncia � baixa!")
    break;
     case (pergunta1 == "m�dia" || pergunta1 == "2"):
    console.log("A urg�ncia � m�dia!")
    break;
     case (pergunta1 == "alta" || pergunta1 == "3"):
    console.log("A urg�ncia � baixa!")
    break;
    default:
    console.log("op��o inv�lida")
}
//pergunta5
console.log("n�vel de urg�ncia: \n1-Compacto\n2-SUV\n3-Caminh�o")
let pergunta5 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta5 === "compacto" || pergunta5 === "1"):
    console.log("Tuk-Tuk!")
    break;
     case (pergunta5 === "suv" || pergunta5 === "2"):
    console.log("Hilux SW4!")
    break;
     case (pergunta5 === "caminh�o" || pergunta5 === "3"):
    console.log("Volkswagen Delivery!")
    break;
    default:
    console.log("digite uma das op��es")
    break;
}
    //pergunta5
let tarifa = prompt("1- Menos de uma hora\n2- 1 hora\n3- Horas adicionais\n4- Di�ria\nQuanto foi o tempo que voc� ficou estacionado? ").toLowerCase()

switch (tarifa) {
    case "1":
        console.log("R$ 5.00") 
        break
    case "2":
        console.log("R$ 7.00") 
        break
    case "3":
        console.log("R$5.00 + R$ 3.00 por hora adicional") 
        break
    case "4":
        console.log("R$ 30.00") 
        break
    default:
        console.log("Op��o inv�lida. Por favor, digite 1, 2, 3 ou 4.")
}

//pergunta6
console.log("n�vel de dificuldade: \n1-f�cil\n2-dif�cil\n3-muito dif�cil")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "f�cil" || pergunta1 == "1"):
    console.log("A dificuldade � baixa (seu frango)!")
    break;
     case (pergunta1 == "dif�cil" || pergunta1 == "2"):
    console.log("A dificuldade � m�dia!")
    break;
     case (pergunta1 == "muito dif�cil" || pergunta1 == "3"):
    console.log("A dificuldade � baixa!")
    break;
    default:
    console.log("op��o inv�lida")}
    
    //pergunta7
let categoria = prompt("Categorias\n1 - Treinamento Funcional\n2 - Treinamento de For�a\n3 - Treinamento Personalizado\nEscolha uma categoria de servi�o: ").toLowerCase()

switch (categoria) {
  case "1":
  case "treinamento funcional":
    console.log(`Voc� escolheu Treinamento Funcional.
    Servi�os inclusos:
    - Treino de corpo inteiro
    - Exerc�cios de agilidade e coordena��o
    - Acompanhamento de um instrutor experiente`)
    break
  case "2":
  case "treinamento de for�a":
    console.log(`Voc� escolheu Treinamento de For�a.
    Servi�os inclusos:
    - Treino de muscula��o avan�ado
    - Exerc�cios de for�a e resist�ncia
    - Plano de treino personalizado`)
    break
  case "3":
  case "treinamento personalizado":
    console.log(`Voc� escolheu Treinamento Personalizado.
    Servi�os inclusos:
    - Treino individualizado
    - Acompanhamento cont�nuo
    - Ajustes no plano de treino conforme necess�rio`)
    break
  default:
    console.log("Categoria inv�lida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}
//pergunta 8
let categoria = prompt("Escolha uma categoria:\n1 - Estudante\n2 - Meia Entrada\n3 - Inteira \n").toLowerCase()

switch (categoria) {
  case "1":
  case "estudante":
    console.log("Pre�o do ingresso: R$ 20,00")
    break
  case "2":
  case "meia entrada":
    console.log("Pre�o do ingresso: R$ 30,00")
    break
  case "3":
  case "inteira":
    console.log("Pre�o do ingresso: R$ 50,00")
    break
  default:
    console.log("Categoria inv�lida.")
}

//pergunta 10
let idade = Number(prompt("digite sua idade: "))
switch(true){
    case(idade <= 10 && idade >= 6):
        console.log("treino leve para iniciantes ")
        break;
        case(idade > 10 && idade <= 15):
        console.log("treino de m�dia intensidade") 
        break;
         case(idade > 15 && idade < 55):
        console.log("treino �rduo")
        break;
         case(idade > 55 && idade <= 120):
        console.log("treino suave para a sa�de")
        break;
        default:
        console.log("essa idade n�o � v�lida")
}

let genero = prompt("Escolha um g�nero musical:\n1 - Rock\n2 - Jazz\n3 - Cl�ssico\n").toLowerCase()

switch (genero) {
  case "1":
  case "rock":
    console.log("Instrumentos: Guitarra, Bateria, Baixo")
    break
  case "2":
  case "jazz":
    console.log("Instrumentos: Saxofone, Trompete, Piano")
    break
  case "3":
  case "cl�ssico":
    console.log("Instrumentos: Violino, Piano, Violoncelo")
    break
  default:
    console.log("G�nero inv�lido.")
}
    
let area = prompt("Escolha uma �rea:\n1 - Front-end\n2 - Back-end\n3 - Mobile\n").toLowerCase()

switch (area) {
  case "1":
  case "front-end":
    console.log("Cursos: HTML, CSS, JavaScript")
    break;
 case "2":
  case "back-end":
    console.log("Cursos: PHP, Ruby, Java, Clojure, C#, Python")
    break;
 case "3":
  case "mobile":
    console.log("Cursos: Kotlin, Swift")
    break;
}

let idade = prompt("Digite a idade do atleta:")

switch (true) {
  case (idade >= 5 && idade <= 12):
    console.log("N�vel de habilidade: Iniciante")
    break
  case (idade >= 13 && idade <= 18):
    console.log("N�vel de habilidade: Intermedi�rio")
    break
  case (idade >= 19):
    console.log("N�vel de habilidade: Avan�ado")
    break
     case (idade >= 100):
    console.log("N�vel de habilidade: Lend�rio")
    break
  default:
    console.log("Idade inv�lida.")
}
let categoria = prompt("Escolha uma categoria:\n1 - B�sico\n2 - Intermedi�rio\n3 - Avan�ado\n").toLowerCase()

switch (categoria) {
 case "1":
  case "b�sico":
    console.log("N�vel de dificuldade: F�cil")
    console.log("Exemplos: Adi��o e subtra��o de n�meros inteiros")
    break
  case "2":
  case "intermedi�rio":
    console.log("N�vel de dificuldade: M�dio")
    console.log("Exemplos: Multiplica��o e divis�o de n�meros decimais")
    break
  case "3":
  case "avan�ado":
    console.log("N�vel de dificuldade: Dif�cil")
    console.log("Exemplos: F�rmula de Bhaskara, logar�tmos")
    break
  default:
    console.log("Categoria inv�lida.")}*/
