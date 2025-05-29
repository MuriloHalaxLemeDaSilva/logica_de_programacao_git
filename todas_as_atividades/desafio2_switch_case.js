let correta = 0
let errada = 0

// Pergunta 1
let enunciado1 = ("Qual é o maior país do mundo em território?")
console.log(enunciado1)
console.log("A China")
console.log("B Canadá")
console.log("C Estados Unidos")
console.log("D Rússia")
console.log("E Brasil")

let pergunta1 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta1) {
    case "d":
        case "rússia":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Rússia!")
        errada++
}

// Pergunta 2
let enunciado2 = ("Quem pintou a Mona Lisa?")
console.log(enunciado2)
console.log("A Van Gogh")
console.log("B Leonardo da Vinci")
console.log("C Picasso")
console.log("D Salvador Dali")
console.log("E Claude Monet")

let pergunta2 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta2) {
    case "b":
        case "leonardo da vinci":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Leonardo da Vinci!")
        errada++
}

// Pergunta 3
let enunciado3 = ("Quantos ossos tem o corpo humano adulto?")
console.log(enunciado3)
console.log("A 206")
console.log("B 276")
console.log("C 329")
console.log("D 409")
console.log("E 127")

let pergunta3 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta3) {
    case "a":
        case "206":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é 206!")
        errada++
}

// Pergunta 4
let enunciado4 = ("Qual é o nome do rio que corta a cidade de Londres?")
console.log(enunciado4)
console.log("A Rio Senna")
console.log("B Rio Amazonas")
console.log("C Rio Danúbio")
console.log("D Rio Tâmisa")
console.log("E Rio Mississipi")

let pergunta4 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta4) {
    case "d":
        case "rio tâmisa":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Rio Tâmisa!")
        errada++
}

// Pergunta 5
let enunciado5 = ("Quem foi o primeiro presidente do Brasil?")
console.log(enunciado5)
console.log("A Lula")
console.log("B Juscelino Kubitschek")
console.log("C Deodoro Fonseca")
console.log("D Getúlio Vargas")
console.log("E Dom Pedro II")

let pergunta5 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta5) {
    case "c":
        case "deodoro fonseca":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Deodoro Fonseca!")
        errada++
}

// Pergunta 6
let enunciado6 = ("Qual é o elemento químico representado pelo símbolo 'Au'?")
console.log(enunciado6)
console.log("A Alúminio")
console.log("B Ferro")
console.log("C Ouro")
console.log("D Prata")
console.log("E Cobre")

let pergunta6 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta6) {
    case "c":
        case "ouro":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Ouro!")
        errada++
}

// Pergunta 7
let enunciado7 = ("Quantos lados tem um undecágono?")
console.log(enunciado7)
console.log("A 11")
console.log("B 18")
console.log("C 21")
console.log("D 7")
console.log("E 9")

let pergunta7 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta7) {
    case "a":
        case "11":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é 11!")
        errada++
}

// Pergunta 8
let enunciado8 = ("Qual é o maior mamífero do mundo?")
console.log(enunciado8)
console.log("A Elefante-Africano")
console.log("B Hipopótamo Angolano")
console.log("C Girafa Asiática")
console.log("D Urso Polar")
console.log("E Baleia Azul")

let pergunta8 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta8) {
    case "e":
        case "baleia azul":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Baleia Azul!")
        errada++
}

// Pergunta 9
let enunciado9 = ("Quem escreveu 'Dom Quixote'?")
console.log(enunciado9)
console.log("A William Shakespeare")
console.log("B Miguel de Cervantes")
console.log("C Machado de Assis")
console.log("D J. R. R. Tolkien")
console.log("E Dante Alighieri")

let pergunta9 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta9) {
    case "b":
        case "miguel de cervantes":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é Miguel de Cervantes!")
        errada++
}

// Pergunta 10
let enunciado10 = ("Em que ano ocorreu a Independência do Brasil?")
console.log(enunciado10)
console.log("A 1500")
console.log("B 1914")
console.log("C 2002")
console.log("D 1889")
console.log("E 1822")

let pergunta10 = prompt("Digite a sua resposta (A,B,C,D,E): ").toLowerCase()
switch (pergunta10) {
    case "e":
        case "1822":
        console.log("Resposta correta!")
        correta++
        break
    default:
        console.log("Resposta Incorreta!\nA resposta correta é 1822!")
        errada++
}

// Exibir Resultado
console.log("\nResumo final: ")
console.log("Respostas corretas: " + correta)
console.log("Respostas incorretas: " + errada)

// Teste de Aprovação
if (correta >= 7 && errada <= 3) {
    console.log("Parabéns, você passou no quiz!!!")
} else {
    console.log("Infelizmente você não passou no quiz :(\nTente novamente para resultados melhores...")
}
