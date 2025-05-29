//pergunta1
console.log("escolha o idioma de entrada: \n1-English\n2-Português\n3-Deutsch\n4-Español")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "english" || pergunta1 == "1"):
    console.log("Welcome!")
    break;
     case (pergunta1 == "español" || pergunta1 == "4"):
    console.log("bienvenido!")
    break;
     case (pergunta1 == "deutsch" || pergunta1 == "3"):
    console.log("Willkommen!")
    break;
     case (pergunta1 == "português" || pergunta1 == "2"):
    console.log("Bem-vindo!")
    break;
    default:
    console.log("esse idioma não é válido")
    break
}

//pergunta2
console.log("escolha um número de dia da semana: \n-1\n-2\n-3\n-4")
let pergunta2 = Number(prompt("= "))
switch(pergunta2){
    case 1:
    console.log("seu dia é domingo!")
    break;
    case 2:
    console.log("seu dia é segunda-feira!")
    break;
    case 3:
    console.log("seu dia é terça-feira!")
    break;
    case 4:
    console.log("seu dia é quarta-feira!")
    break;
    case 5:
    console.log("seu dia é quinta-feira!")
    break;
    case 6:
    console.log("seu dia é sexta-feira!")
    break;
    case 7:
    console.log("seu dia é sábado!")
    break;
    default:
        console.log("esse dia não é válido!")
    
}
//pergunta3
console.log("sorteie seu veículo seu veículo: \n1.\n2.\n3.\n4.\n5.\n6.")
let pergunta3 = Number(prompt("= "))
switch(pergunta3){
    case 1:
    console.log("Carro!")
    break;
    case 2:
    console.log("Trator!")
    break;
    case 3:
    console.log("Caminhão!")
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
        console.log("esse não é um número válido não é válido!")}
        
//pergunta4
console.log("nível de urgência: \n1-Baixa-\n2-Média\n3-Alta")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "baixa" || pergunta1 == "1"):
    console.log("A urgência é baixa!")
    break;
     case (pergunta1 == "média" || pergunta1 == "2"):
    console.log("A urgência é média!")
    break;
     case (pergunta1 == "alta" || pergunta1 == "3"):
    console.log("A urgência é baixa!")
    break;
    default:
    console.log("opção inválida")
}
//pergunta5
console.log("nível de urgência: \n1-Compacto\n2-SUV\n3-Caminhão")
let pergunta5 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta5 === "compacto" || pergunta5 === "1"):
    console.log("Tuk-Tuk!")
    break;
     case (pergunta5 === "suv" || pergunta5 === "2"):
    console.log("Hilux SW4!")
    break;
     case (pergunta5 === "caminhão" || pergunta5 === "3"):
    console.log("Volkswagen Delivery!")
    break;
    default:
    console.log("digite uma das opções")
    break;
}
    //pergunta5
let tarifa = prompt("1- Menos de uma hora\n2- 1 hora\n3- Horas adicionais\n4- Diária\nQuanto foi o tempo que você ficou estacionado? ").toLowerCase()

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
        console.log("Opção inválida. Por favor, digite 1, 2, 3 ou 4.")
}

//pergunta6
console.log("nível de dificuldade: \n1-fácil\n2-difícil\n3-muito difícil")
let pergunta1 = prompt("= ").toLowerCase()
switch(true){
    case (pergunta1 == "fácil" || pergunta1 == "1"):
    console.log("A dificuldade é baixa (seu frango)!")
    break;
     case (pergunta1 == "difícil" || pergunta1 == "2"):
    console.log("A dificuldade é média!")
    break;
     case (pergunta1 == "muito difícil" || pergunta1 == "3"):
    console.log("A dificuldade é baixa!")
    break;
    default:
    console.log("opção inválida")}
    
    //pergunta7
let categoria = prompt("Categorias\n1 - Treinamento Funcional\n2 - Treinamento de Força\n3 - Treinamento Personalizado\nEscolha uma categoria de serviço: ").toLowerCase()

switch (categoria) {
  case "1":
  case "treinamento funcional":
    console.log(`Você escolheu Treinamento Funcional.
    Serviços inclusos:
    - Treino de corpo inteiro
    - Exercícios de agilidade e coordenação
    - Acompanhamento de um instrutor experiente`)
    break
  case "2":
  case "treinamento de força":
    console.log(`Você escolheu Treinamento de Força.
    Serviços inclusos:
    - Treino de musculação avançado
    - Exercícios de força e resistência
    - Plano de treino personalizado`)
    break
  case "3":
  case "treinamento personalizado":
    console.log(`Você escolheu Treinamento Personalizado.
    Serviços inclusos:
    - Treino individualizado
    - Acompanhamento contínuo
    - Ajustes no plano de treino conforme necessário`)
    break
  default:
    console.log("Categoria inválida. Por favor, digite 1, 2 ou 3 ou o nome da categoria.")
}
//pergunta 8
let categoria = prompt("Escolha uma categoria:\n1 - Estudante\n2 - Meia Entrada\n3 - Inteira \n").toLowerCase()

switch (categoria) {
  case "1":
  case "estudante":
    console.log("Preço do ingresso: R$ 20,00")
    break
  case "2":
  case "meia entrada":
    console.log("Preço do ingresso: R$ 30,00")
    break
  case "3":
  case "inteira":
    console.log("Preço do ingresso: R$ 50,00")
    break
  default:
    console.log("Categoria inválida.")
}

//pergunta 10
let idade = Number(prompt("digite sua idade: "))
switch(true){
    case(idade <= 10 && idade >= 6):
        console.log("treino leve para iniciantes ")
        break;
        case(idade > 10 && idade <= 15):
        console.log("treino de média intensidade") 
        break;
         case(idade > 15 && idade < 55):
        console.log("treino árduo")
        break;
         case(idade > 55 && idade <= 120):
        console.log("treino suave para a saúde")
        break;
        default:
        console.log("essa idade não é válida")
}

let genero = prompt("Escolha um gênero musical:\n1 - Rock\n2 - Jazz\n3 - Clássico\n").toLowerCase()

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
  case "clássico":
    console.log("Instrumentos: Violino, Piano, Violoncelo")
    break
  default:
    console.log("Gênero inválido.")
}
    
let area = prompt("Escolha uma área:\n1 - Front-end\n2 - Back-end\n3 - Mobile\n").toLowerCase()

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
    console.log("Nível de habilidade: Iniciante")
    break
  case (idade >= 13 && idade <= 18):
    console.log("Nível de habilidade: Intermediário")
    break
  case (idade >= 19):
    console.log("Nível de habilidade: Avançado")
    break
     case (idade >= 100):
    console.log("Nível de habilidade: Lendário")
    break
  default:
    console.log("Idade inválida.")
}
let categoria = prompt("Escolha uma categoria:\n1 - Básico\n2 - Intermediário\n3 - Avançado\n").toLowerCase()

switch (categoria) {
 case "1":
  case "básico":
    console.log("Nível de dificuldade: Fácil")
    console.log("Exemplos: Adição e subtração de números inteiros")
    break
  case "2":
  case "intermediário":
    console.log("Nível de dificuldade: Médio")
    console.log("Exemplos: Multiplicação e divisão de números decimais")
    break
  case "3":
  case "avançado":
    console.log("Nível de dificuldade: Difícil")
    console.log("Exemplos: Fórmula de Bhaskara, logarítmos")
    break
  default:
    console.log("Categoria inválida.")}*/
