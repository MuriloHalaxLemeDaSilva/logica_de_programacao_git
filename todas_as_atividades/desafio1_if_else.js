/*console.log("hello word");*/

let respostaCorreta = 0
let respostaIncorreta = 0

//pergunta1
console.log("Quem � o compositor da m�sica de jazz fusion cantaloup island?")
console.log("A - Herbie Hancock")
console.log("B - Dave burbeck")
let pergunta1 = prompt("digite a resposta: ")
if (pergunta1 == "A" || pergunta1 == "Herbie Hancock"){
    console.log("alternativa correta")
    respostaCorreta ++
}
else{
    console.log("resposta incorreta")
    respostaIncorreta++
}

//pergunta2
console.log("\nQual das m�sicas a seguir n�o � da banda Led Zepellin?")
console.log("A - Black dog")
console.log("B - Trampled under foot")
console.log("C - Working man")
console.log("D - The song remains the same")
let pergunta2 = prompt("digite a resposta: ")
if(pergunta2 == "C"|| pergunta2 == "Working man"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta! a resposta correta � a letra C!! Working Man � uma can��o da banda canadense Rush")
    respostaIncorreta ++
}

//pergunta3
console.log("\nQual desses n�o � um bateirista?")
console.log("A - Ringo Starr")
console.log("B - Keith Richards")
console.log("C - Keith Moon")
console.log("D - Phill Collins")
let pergunta3 = prompt("digite a resposta: ")
if(pergunta3 == "B"|| pergunta3 == "Keith Richards"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta! a resposta correta � a letra B!! Keith Richards � o guitarrista da banda de rock The Rolling Stones")
    respostaIncorreta ++
}

//pergunta4
console.log("\nQual cantora gravou junto de Marvin Gaye, sendo fruto dessa parceria, uma das can��es mais famosas do cantor?")
console.log("A - Tammi Terrell")
console.log("B - Aretha Franklin")
console.log("C - Whitney Houston")
console.log("D - Diana Ross")
let pergunta4 = prompt("digite a resposta: ")
if(pergunta4 == "A"|| pergunta4 == "Tammi Terrell"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta! a correta � a resposta A!! Tammi Tarrell participou do �lbum united, de 1967, onde ao lado de Marvin Gaye, cantou um dos maiores hinos da motown, a can��o ain't no mountain high enough")
    respostaIncorreta ++
}

//pergunta 5
console.log("\nQuem � o compositor da m�sica rocket man?")
console.log("A - John Lennon")
console.log("B - Billy Joel")
console.log("C - Bon Jovi")
console.log("D - Elton John")
let pergunta5 = prompt("digite a resposta: ")
if(pergunta5 == "D"|| pergunta5 == "Elton John"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta! a resposta correta � a letra D!! Elton John comp�s essa m�sica para seu �lbum honky ch�teau")
    respostaIncorreta ++
}
//pergunta 6
console.log("\nDe qual cantor � o samba pressentimento?")
console.log("A - Paulinho da viola")
console.log("B - Ataulfo Alves")
console.log("C - Pixinguinha")
console.log("D - Elton Medeiros")
let pergunta6 = prompt("digite a resposta: ")
if(pergunta6 == "D"|| pergunta6 == "Elton Medeiros"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta!")
    respostaIncorreta ++
}

//pergunta7
console.log("\nQual o nome de um dos maiores sucessos da carreira de Jerry Lee Lewis?")
console.log("A - tutti frutti")
console.log("B - forever yours")
console.log("C - jailhouse rock")
console.log("D - great balls of fire")
let pergunta7 = prompt("digite a resposta: ")
if(pergunta7 == "D"|| pergunta7 == "great balls of fire"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta! a resposta correta � a letra D, great balls of fire foi lan�ada em 1961, e =se tornou um dos maiores sucessos da d�cada e de toda a carreira de Jerry L. Lewis")
    respostaIncorreta ++
}
//pergunta8
console.log("\nde qual cantor � o samba pressentimento?")
console.log("A - Paulinho da viola")
console.log("B - Ataulfo Alves")
console.log("C - Pixinguinha")
console.log("D - Elton Medeiros")
let pergunta6 = prompt("digite a resposta: ")
if(pergunta6 == "D"|| pergunta6 == "Elton Medeiros"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("alternativa incorreta!")
    respostaIncorreta ++
}










//exibir o resultado
console.log("\nresumo final:")
console.log("respostas corretas: " + respostaCorreta)
console.log("respostas incorretas: " + respostaIncorreta)



