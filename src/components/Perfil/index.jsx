import { React, useState } from "react"


function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
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

    return (
        <div className="container">
            <h1>Calculadora IMC</h1> <br />

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
            </form>
        </div>
    )
}


export default Formulario;