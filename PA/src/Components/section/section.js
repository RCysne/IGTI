import React, { Component } from 'react';
import './section.css';

/*
let time = 50000; // Tempo de transição
let currentImageIndex = 0; // Imagem inicial na posição 0
let images = document.querySelectorAll('#slider img'); // pegando as imagens
let max = images.length; // Quantidade de elementos para a rotaçao


function nextImage() {

    // Zerando as classes para que a rotação não pare na primeira volta depois de adicionar o 'selected' em todas as imagens
    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0;
    }

    // Usando as imagens, adicionando a posição 0 e adicionando a classe selected
    images[currentImageIndex].classList.add('selected');
}

function start() {
    setInterval(() => {
        //colocando a função da troca de imagens dentro do setInterval junto ao time
        nextImage();
    }, time)
}

window.addEventListener('load', start); // Quando a página rodar, a função start vai iniciar */

class section extends React.Component {
    render() {
        return(

    <div className="section">
        <section>
            <div id="slider">
                <img class="selected" src="/Images/casa_1.jpg" alt="Planta 3D"/>
                <img src="/Images/casa_2.jpg" alt="Planta 3D"/>
                <img src="/Images/casa_3.jpg" alt="Planta 3D"/>
                <img src="/Images/casa_4.jpg" alt="Planta 3D"/>
            </div>
        </section>
    </div>

        )
    }
};


export default section;
