function selecionarImgProduto(imgMiniaturaEscolhida) {
    document.querySelector(".foto-principal").src = imgMiniaturaEscolhida.src;
    const miniaturaAtiva = document.querySelector(".miniatura.ativo");
    if (miniaturaAtiva) {
        miniaturaAtiva.classList.remove("ativo");
    }
    imgMiniaturaEscolhida.classList.add("ativo");
}