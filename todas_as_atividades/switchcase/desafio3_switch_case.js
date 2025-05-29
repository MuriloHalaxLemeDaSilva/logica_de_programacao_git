
console.log("Bem-vindo, vamos ajudá-lo(a) a responder suas dúvidas a respeito de CMD Windows e terminal Linux!")

let pergunta = prompt("Digite 1 para Windows ou 2 para Linux: ").toLowerCase()

if (pergunta === "1") {
  console.log("Você escolheu CMD Windows!")
  let duvida = prompt("Qual comando você gostaria de saber mais?\n1-dir\n2-cd\n3-mkdir\n4-copy\n5-move\n6-delete\n7-ipconfig\n").toLowerCase()
  switch (duvida) {
    case "1":
    case "dir":
      console.log("O dir é um comando que lista os arquivos e diretórios em um diretório atual. Ex: dentro do diretório desejado, digite dir. Assim os aarquivos e diretórios dentro dessa pasta vão ser exibidos")
      break
    case "2":
    case "cd":
      console.log("O cd é um comando que muda o diretório atual. Ex: você deseja acessar uma pasta que esteja dentro de seu diretório atual, assim, digite cd + o nome da pasta, como: cd pasta1")
      break
    case "3":
    case "mkdir":
      console.log("O mkdir é um comando que cria um novo diretório. digite mkdir + o nome da pasta, como por exemplo: mkdir pasta_nova")
      break
    case "4":
    case "copy":
      console.log("O copy é um comando que copia arquivos. Para isso você seguir os seguintes passos: cp + nome do arquivo + caminho, sendo o caminho o processo que levará até a pasta Ex: \home\nomedousuario\pasta1\pasta")
      break
    case "5":
    case "move":
      console.log("O move é um comando que move ou renomeia arquivos.")
      break
    case "6":
    case "delete":
      console.log("O del é um comando que exclui arquivos.")
      break
    case "7":
    case "ipconfig":
      console.log("O ipconfig é um comando que exibe informações sobre a configuração de rede.")
      break
    default:
      console.log("Digite uma opção válida!")
  }
} else if (pergunta === "2") {
  console.log("Você escolheu Terminal Linux!")
  let duvida2 = prompt("Qual comando você gostaria de saber mais?\n1-ls\n2-cd\n3-mkdir\n4-cp\n5-mv\n6-rm\n").toLowerCase()
  switch (duvida2) {
    case "1":
    case "ls":
      console.log("O ls é um comando que lista os arquivos e diretórios em um diretório atual.")
      break
    case "2":
    case "cd":
      console.log("O cd é um comando que muda o diretório atual.")
      break
    case "3":
    case "mkdir":
      console.log("O mkdir é um comando que cria um novo diretório.")
      break
    case "4":
    case "cp":
      console.log("O cp é um comando que copia arquivos.")
      break
    case "5":
    case "mv":
      console.log("O mv é um comando que move ou renomeia arquivos.")
      break
    case "6":
    case "rm":
      console.log("O rm é um comando que exclui arquivos.")
      break
  
    default:
      console.log("Digite uma opção válida!")
  }
} else {
  console.log("Opção inválida. Por favor, digite 1 para Windows ou 2 para Linux.")
}