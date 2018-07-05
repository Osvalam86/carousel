(function carouselImg(){

function carousel(container){
  
  let imagenes = ['img/img1.jpg','img/img2.jpg','img/img3.jpg',
                  'img/img4.jpg','img/img5.jpg'],
                 contador = 0;

  container.addEventListener('click', evento => {
    let atras = container.querySelector('#prev'),
        adelante = container.querySelector('#next'),
        img = container.querySelector('img'),
        tgt = evento.target;

    if(tgt == atras){
      if(contador > 0) {
        img.src = imagenes[contador - 1];
        contador--;
      } else {
        img.src = imagenes[imagenes.length -1];
        contador = imagenes.length -1;
      }
    } else if(tgt == adelante) {
      if(contador < imagenes.length -1) {
        img.src = imagenes[contador + 1];
        contador++;
      } else {
        img.src = imagenes[0];
        contador = 0;
      }
    }
  });
}

  let container = document.querySelector('.container');
  carousel(container);

}())
