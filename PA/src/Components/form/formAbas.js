import React, { Component } from 'react'
import './formAbas.css'

class form extends React.Component {
  render() {
    return (
      /*
    <div className="form">

        <div className="cadastramento">
            <p>Cadastro</p>
        </div>

        <div className="logoRegister">
            <div className="white">
                <img id="logoRegister" src="./Images/logoDeitada.png" alt="Logomarca Luciana Otoch"/>
            </div>
        </div>

        <section className="sectionform" id="sectionform">
    
            <form className="formulario" action="">

                <div className="partner">
                    <div className="namePartner">
                        <label htmlfor="nomeParceiro">Nome: </label>
                        <input type="text" name="nomeParceiro" id="nomeParceiro" placeholder="Digite o seu nome."/>
                    </div>

                <div className="nameBusiness">
                    <label htmlfor="nomeEmpresa">Empresa: </label>
                    <input type="text" name="nomeEmpresa" id="nomeEmpresa" placeholder="Digite o nome da empresa."/>
                </div>

                <div className="emailPartner">
                    <label htmlfor="emailParceiro">Email: </label>
                    <input type="email" name="emailParceiro" id="emailParceiro" placeholder="Digite o seu email."/>
                </div>
        </div>

                    <input classNameName="btn" type="button" value="Cadastrar" id="btnRegister"/>

                <div className="login-data">
                    <div className="login">
                        <label htmlfor="loginParceiro">Digite seu login: </label>
                        <input type="text" name="loginRegister" id="loginRegister" placeholder="Login"/>
                    </div>

                <div className="password-data">
                    <label htmlfor="senhaParceiro">Digite sua senha: </label>
                    <input type="password" name="senhaParceiro" id="senhaParceiro" placeholder="Senha"/>
                </div>
            </div>
                    <input className="btn" type="button" value="Entrar" id="btnLogin"/>
            </form>
        </section>
    </div> */

      // <div classNameName="form">
      //   <div className="cadastramento">
      //     <p>Cadastro</p>
      //   </div>
      //   <div className="logoRegister">
      //     <div className="white">
      //       <img
      //         id="logoRegister"
      //         src="./Images/logoDeitada.png"
      //         alt="Logomarca Luciana Otoch"
      //       />
      //     </div>
      //   </div>
      //   <nav className="nav-tabs">
      //     <ul>
      //       <li>
      //         <input
      //           type="radio"
      //           name="tabs"
      //           className="rd_tabs"
      //           id="tab1"
      //           checked
      //         />
      //         <label className="labelF" htmlFor="tab1">
      //           Clientes
      //         </label>
      //         <div className="content">
      //           <div className="login-data">
      //             <div className="login">
      //               <label htmlFor="loginParceiro">Digite seu login: </label>
      //               <input
      //                 type="text"
      //                 name="loginRegister"
      //                 id="loginRegister"
      //                 placeholder="Login"
      //               />
      //             </div>
      //             <div className="password-data">
      //               <label htmlFor="senhaParceiro">Digite sua senha: </label>
      //               <input
      //                 type="password"
      //                 name="senhaParceiro"
      //                 id="senhaParceiro"
      //                 placeholder="Senha"
      //               />
      //             </div>
      //             <button className="btn" id="btn_client">
      //               Enviar
      //             </button>
      //           </div>
      //         </div>
      //       </li>
      //       <li>
      //         <input type="radio" name="tabs" className="rd_tabs" id="tab2" />
      //         <label className="labelF" htmlFor="tab2">
      //           Parceiros
      //         </label>
      //         <div className="content">
      //           <div className="partner">
      //             <div className="namePartner">
      //               <label htmlFor="nomeParceiro">Nome: </label>
      //               <input
      //                 type="text"
      //                 name="nomeParceiro"
      //                 id="nomeParceiro"
      //                 placeholder="Digite o seu nome."
      //               />
      //             </div>
      //             <div className="nameBusiness">
      //               <label htmlFor="nomeEmpresa">Empresa: </label>
      //               <input
      //                 type="text"
      //                 name="nomeEmpresa"
      //                 id="nomeEmpresa"
      //                 placeholder="Digite o nome da empresa."
      //               />
      //             </div>
      //             <div className="emailPartner">
      //               <label htmlFor="emailParceiro">Email: </label>
      //               <input
      //                 type="email"
      //                 name="emailParceiro"
      //                 id="emailParceiro"
      //                 placeholder="Digite o email cadastrado."
      //               />
      //             </div>

      //             <button className="btn" id="btn_partner">
      //               Enviar
      //             </button>
      //           </div>
      //         </div>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>

      <div className="form">
        <div className="cadastramento">
          <p>Cadastro</p>
        </div>

        <div className="logoRegister">
          <div className="white">
            <img
              id="logoRegister"
              src="./Images/logoDeitada.png"
              alt="Logomarca Luciana Otoch"
            />
          </div>
        </div>

        <section className="sectionForm" id="sectionForm">
          <form className="formulario" action="">
            <nav className="nav-tabs">
              <ul>
                <li>
                  <input
                    type="radio"
                    name="tabs"
                    className="rd_tabs"
                    id="tab1"
                    checked
                  />
                  <label className="labelF" htmlFor="tab1">
                    Clientes
                  </label>
                  <div className="content">
                    <div className="login-data">
                      <div className="login">
                        <label htmlFor="loginParceiro">
                          Digite seu login:{' '}
                        </label>
                        <input
                          type="text"
                          name="loginRegister"
                          id="loginRegister"
                          placeholder="Login"
                        />
                      </div>
                      <div className="password-data">
                        <label htmlFor="senhaParceiro">
                          Digite sua senha:{' '}
                        </label>
                        <input
                          type="password"
                          name="senhaParceiro"
                          id="senhaParceiro"
                          placeholder="Senha"
                        />
                      </div>
                      <button className="btn" id="btn_client">
                        Enviar
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <input
                    type="radio"
                    name="tabs"
                    className="rd_tabs"
                    id="tab2"
                  />
                  <label className="labelF" htmlFor="tab2">
                    Parceiros
                  </label>
                  <div className="content">
                    <div className="partner">
                      <div className="namePartner">
                        <label htmlFor="nomeParceiro">Nome: </label>
                        <input
                          type="text"
                          name="nomeParceiro"
                          id="nomeParceiro"
                          placeholder="Digite o seu nome."
                        />
                      </div>
                      <div className="nameBusiness">
                        <label htmlFor="nomeEmpresa">Empresa: </label>
                        <input
                          type="text"
                          name="nomeEmpresa"
                          id="nomeEmpresa"
                          placeholder="Digite o nome da empresa."
                        />
                      </div>
                      <div className="emailPartner">
                        <label htmlFor="emailParceiro">Email: </label>
                        <input
                          type="email"
                          name="emailParceiro"
                          id="emailParceiro"
                          placeholder="Digite o email cadastrado."
                        />
                      </div>

                      <button className="btn" id="btn_partner">
                        Enviar
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </form>
        </section>
      </div>
    )
  }
}

export default form
