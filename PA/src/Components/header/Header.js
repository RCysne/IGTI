import React, { Component } from 'react'
import './Header.css'

class header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src="/Images/logoDeitada.png" alt="Logomarca" />
        </div>
        <div className="Menu">
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">Escritório</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#sectionForm">Cadastro</a>
              </li>
              <li>
                <a href="#sectionForm">Profissionais</a>
              </li>
              <li>
                <a href="#">Redes Sociais</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default header
