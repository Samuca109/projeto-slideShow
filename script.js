// a ordem importa para carregar as variaveis 

'use strict';

const img = [
    { 'id': '1', 'url':'./imagens/anime.jpg'}, 
    {'id': '2', 'url':'./imagens/capa.jpg'},
    {'id': '3', 'url':'./imagens/desenho.jpg'},
    {'id': '5', 'url':'./imagens/guerra.jpg'},
    { 'id': '6', 'url':'./imagens/jogo.jpg'},
    {'id': '7', 'url':'./imagens/ultron.jpg'}
]

const container = document.getElementById('fotos');

const loadfotos = ( img,  container ) => {
   img.forEach( image => {
    container.innerHTML +=  // sempre usar o + para poder concatenar,exemplo tire o + e veja que nao vai aparecer todas as fotos de uma vez
    `<div class='item'>
         <img src='${image.url}'
    </div>
    `
})
}

loadfotos (img, container);

 let items = document.querySelectorAll('.item');
      
const botao = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
 
document.querySelector('.botao').addEventListener('click', botao);
    