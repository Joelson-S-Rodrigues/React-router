import React from "react";
import imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

const Pagina404 = () => {
    return(
<main className="container flex flex--centro flex--coluna">
    <img  className="image-doguito" src={imagem} alt="" />
    <p className="naoEncontrado-texto">
        Ops, Página nao encontrada!
    </p>
</main>
    )
}

export default Pagina404