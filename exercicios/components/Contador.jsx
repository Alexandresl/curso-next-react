import { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render() {
        return (
            <div>
                <h1>Contador (Usando Classe)</h1>
                <h2>{this.state.numero}</h2>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <input type="number" 
                    value={this.state.passo} 
                    onChange={(event) => this.setState({passo: +event.target.value})} 
                />
            </div>
        );
    }
}