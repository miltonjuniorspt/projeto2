
let titulo = document.createElement("h1");


titulo.id = "titulo";
titulo.innerText = "Loja de Discos";


let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");


produto.innerHTML = `
  <div>
    <h2>Disco é cultura</h2>
    <img src="http://images.virgula.me/2017/02/MG_7463.jpg" alt="loja de discos">
    <p>Aqui você encontra discos de Rock, pop, jaz, samba e etc...</p>
    <p id="preco dos discos">R$ 120.00</p>
  </div>
`;


body.appendChild(produto)
