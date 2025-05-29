function login() {
    
  let usuario1 = "rodrigo"
  let senha1 = "1234"

  let usuario2 = "maria"
  let senha2 = "abcd"

  let usuario3 = "joao"
  let senha3 = "senha forte"

  let usuario4 = "luna"
  let senha4 = "estrela"

  let usuario5 = "rafael"
  let senha5 = "volley"

  let usuario6 = "sofia"
  let senha6 = "123abc"

  let usuario7 = "enzo"
  let senha7 = "senha123"

  let usuario8 = "lara";
  let senha8 = "gatinha";

  let usuario9 = "Pedro"
  let senha9 = "#R7v!Xa2@Qp"

  let usuario10 = "beatriz"
  let senha10 = "a melhor123"


  let usuario = prompt("Digite seu usuário:")
  let senha = prompt("Digite sua senha:")


  if (
    (usuario === usuario1 && senha === senha1) ||
    (usuario === usuario2 && senha === senha2) ||
    (usuario === usuario3 && senha === senha3) ||
    (usuario === usuario4 && senha === senha4) ||
    (usuario === usuario5 && senha === senha5) ||
    (usuario === usuario6 && senha === senha6) ||
    (usuario === usuario7 && senha === senha7) ||
    (usuario === usuario8 && senha === senha8) ||
    (usuario === usuario9 && senha === senha9) ||
    (usuario === usuario10 && senha === senha10)
  ) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuario + "!");
  } else {
    console.log("Usuário ou senha incorretos.");
  }
}

login()