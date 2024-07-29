import { React, useState } from "react"


function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    let [resultado, setResultado] = useState(null);

    const calcularIMC = (evento) => {
        evento.preventDefault();
        const imc = peso / (altura * altura)
        setResultado(imc)
    }

    const rederizaResultado = () => {
        if (resultado === null) {
            return null
        }

        if (resultado <= 18.5) {
            return (
                <p>ola seu IMC e {resultado.toFixed(2)}. Abaixo do peso</p>
            )
        }

    }
    return (
        <div className="container">
            <h1>Calculadora IMC</h1> <br />
            <form>
                <input type="number" onChange={evento => setPeso(evento.target.value)} placeholder="digite seu peso" /><br />
                <input type="number" onChange={evento => setAltura(evento.target.value)} placeholder="digite seu altura" /> <br />
                <button type="submit" onClick={calcularIMC}>Calcular</button>
                {rederizaResultado()}
            </form>
        </div>
    )
}


export default Formulario;