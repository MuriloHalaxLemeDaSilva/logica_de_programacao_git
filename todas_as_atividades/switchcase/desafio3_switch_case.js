
console.log("Bem-vindo, vamos ajud�-lo(a) a responder suas d�vidas a respeito de CMD Windows e terminal Linux!")

let pergunta = prompt("Digite 1 para Windows ou 2 para Linux: ").toLowerCase()

if (pergunta === "1") {
  console.log("Voc� escolheu CMD Windows!")
  let duvida = prompt("Qual comando voc� gostaria de saber mais?\n1-dir\n2-cd\n3-mkdir\n4-copy\n5-move\n6-delete\n7-ipconfig\n").toLowerCase()
  switch (duvida) {
    case "1":
    case "dir":
      console.log("O dir � um comando que lista os arquivos e diret�rios em um diret�rio atual. Ex: dentro do diret�rio desejado, digite dir. Assim os aarquivos e diret�rios dentro dessa pasta v�o ser exibidos")
      break
    case "2":
    case "cd":
      console.log("O cd � um comando que muda o diret�rio atual. Ex: voc� deseja acessar uma pasta que esteja dentro de seu diret�rio atual, assim, digite cd + o nome da pasta, como: cd pasta1")
      break
    case "3":
    case "mkdir":
      console.log("O mkdir � um comando que cria um novo diret�rio. digite mkdir + o nome da pasta, como por exemplo: mkdir pasta_nova")
      break
    case "4":
    case "copy":
      console.log("O copy � um comando que copia arquivos. Para isso voc� seguir os seguintes passos: cp + nome do arquivo + caminho, sendo o caminho o processo que levar� at� a pasta Ex: \home\nomedousuario\pasta1\pasta")
      break
    case "5":
    case "move":
      console.log("O move � um comando que move ou renomeia arquivos.")
      break
    case "6":
    case "delete":
      console.log("O del � um comando que exclui arquivos.")
      break
    case "7":
    case "ipconfig":
      console.log("O ipconfig � um comando que exibe informa��es sobre a configura��o de rede.")
      break
    default:
      console.log("Digite uma op��o v�lida!")
  }
} else if (pergunta === "2") {
  console.log("Voc� escolheu Terminal Linux!")
  let duvida2 = prompt("Qual comando voc� gostaria de saber mais?\n1-ls\n2-cd\n3-mkdir\n4-cp\n5-mv\n6-rm\n").toLowerCase()
  switch (duvida2) {
    case "1":
    case "ls":
      console.log("O ls � um comando que lista os arquivos e diret�rios em um diret�rio atual.")
      break
    case "2":
    case "cd":
      console.log("O cd � um comando que muda o diret�rio atual.")
      break
    case "3":
    case "mkdir":
      console.log("O mkdir � um comando que cria um novo diret�rio.")
      break
    case "4":
    case "cp":
      console.log("O cp � um comando que copia arquivos.")
      break
    case "5":
    case "mv":
      console.log("O mv � um comando que move ou renomeia arquivos.")
      break
    case "6":
    case "rm":
      console.log("O rm � um comando que exclui arquivos.")
      break
  
    default:
      console.log("Digite uma op��o v�lida!")
  }
} else {
  console.log("Op��o inv�lida. Por favor, digite 1 para Windows ou 2 para Linux.")
}