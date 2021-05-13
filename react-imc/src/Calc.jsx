import React, { Component } from 'react';

class Calc extends Component {
  constructor(props) {
    super(props);
    // Estado inicial da aplicação
    this.state = {
      peso: 0,
      altura: 0,
      valor: '',
    };

    // Referenciando o this com o bind
    this.handlePeso = this.handlePeso.bind(this);
    this.handleAltura = this.handleAltura.bind(this);
    this.calcImc = this.calcImc.bind(this);
  }

  handlePeso(event) {
    this.setState({ peso: event.target.value });
  }

  handleAltura(event) {
    this.setState({ altura: event.target.value });
  }

  calcImc() {
    //alert(`Peso: ${this.state.peso}. Altura ${this.state.altura}.`);
    const { peso, altura } = this.state;
    let valor = peso / (altura * altura);
    this.setState({ valor }); // Valor: valor, mas como é o mesmo nome só precisa do valor 1x
  }

  render() {
    return (
      <div className="calc">
        <label htmlFor="peso">Peso: </label>
        <input
          type="text"
          id="peso"
          onChange={this.handlePeso} // Evento
          placeholder="Informe o seu peso."
          autoFocus
        />
        <label htmlFor="altura">Altura: </label>
        <input
          type="text"
          id="altura"
          onChange={this.handleAltura} // Evento
          placeholder="Informe a sua altura."
        />
        <button onClick={this.calcImc}>Calcular IMC</button>
        <p>{Number(this.state.valor).toFixed(2)}</p>

        <table>
          <thead>
            <tr>
              <td>IMC</td>
              <td>Diagnóstico</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menor que 18,5</td>
              <td>Baixo peso</td>
            </tr>
            <tr>
              <td>entre 18,5 e 24,9</td>
              <td>intervalo normal</td>
            </tr>
            <tr>
              <td>entre 25 e 29,9</td>
              <td>sobrepeso</td>
            </tr>
            <tr>
              <td>entre 30 e 34,9</td>
              <td>obesidade classe I</td>
            </tr>
            <tr>
              <td>entre 35 e 39,9</td>
              <td>obesidade classe II</td>
            </tr>
            <tr>
              <td>maior que 40</td>
              <td>obesidade classe III</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calc;

// function messageImc() {
//   if (valor < 18) {
//     return 'Você está abaixo do peso!';
//   } else if (valor >= 18 && valor < 24) {
//     return 'Você está com o peso normal!';
//   } else if (valor >= 24 && valor < 30) {
//     return 'Você está acima do peso!';
//   } else if (valor > 30) {
//     return 'Você está obeso!';
//   }
// }
