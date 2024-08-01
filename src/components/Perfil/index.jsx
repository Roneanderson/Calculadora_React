import { React, useState } from "react"


function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
<<<<<<< HEAD
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
=======
    const [valorIMC, setValorIMC] = useState(0);

    //função para armazena o valor
    function calculoImc(e) {
        setPeso(e.target.value);
    }

    //função do botão calcular
    function calcularIMC() {
        let imc;
        imc = peso / altura / altura;
        setValorIMC(imc)
    }
>>>>>>> 6e66bd93e17becd23c0be5143c7efe875f56d6cd

    }
    return (
        <div className="container">
            <h1>Calculadora IMC</h1> <br />
<<<<<<< HEAD
            <form>
                <input type="number" onChange={evento => setPeso(evento.target.value)} placeholder="digite seu peso" /><br />
                <input type="number" onChange={evento => setAltura(evento.target.value)} placeholder="digite seu altura" /> <br />
                <button type="submit" onClick={calcularIMC}>Calcular</button>
                {rederizaResultado()}
=======

            <form>
                <label className="link" htmlFor="peso">Peso:</label> <br />
                <input className="dispo" required type="number" name="peso" value={peso} id="peso" onChange={calculoImc} />

                <br /><br />

                <label className="link" htmlFor="altura">Altura:</label> <br />
                <input className="dispo" required type="number" name="altura" value={altura} id="altura" onChange={e => setAltura(e.target.value)} />

                <br /><br />

                <input className="btn" type="button" value="Calcular IMC" onClick={calcularIMC} />

                <br /><br />
                <b>Seu imc é:</b> {valorIMC.toFixed(2)}
>>>>>>> 6e66bd93e17becd23c0be5143c7efe875f56d6cd
            </form>
        </div>
    )
}


export default Formulario;