let contadorLikes = 0;

function darLike() {
    contadorLikes++;
    actualizarLikes();
}

function actualizarLikes(){
    const contadorElementos = document.querySelectorAll('.contador-likes')
    contadorElementos.innerText = contadorLikes;
}
document.querySelectorAll('.boton-like').addEventListener('click', darLike);