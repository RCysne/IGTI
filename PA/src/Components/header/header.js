import React, { Component } from 'react';


class header extends React.Component {
    render () {
        return(
<div className="Header">
    <div className="Logo">
        <img src="/Images/logoDeitada.png" alt="Logomarca" />
    </div> 
    <div className="Menu">
        <nav>
            <ul>
               <li><a href="#">HOME</a></li>
               <li><a href="#">Escritório</a></li>
               <li><a href="#">Projetos</a></li>
               <li><a href="#">Cadastro</a></li>
               <li><a href="#">Profissionais</a></li>
               <li><a href="#">Redes Sociais</a></li>
            </ul>
         </nav>
     </div>
</div> );

    };
};

export default header;