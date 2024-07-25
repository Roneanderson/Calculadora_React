import React, {useState} from "react" 

function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [valorIMC, setValorIMC] = useState(0);

    function calculoImc(e) {
        setPeso(e.target.value);
    }
    
    function calcularIMC() {
        let imc;
        imc = peso / altura / altura;
        setValorIMC(imc)
    }

    return (
        <div>
            <h1>Calculadora IMC</h1> <br />

            <form>
                <label htmlFor="peso">Peso:</label> <br/>
                <input type="number" name="peso" value={peso} id="peso"onChange={calculoImc}/>

                <br/><br/>

                <label htmlFor="altura">Altura:</label> <br/> 
                <input type="number" name="altura" value={altura} id="altura" onChange={e => setAltura(e.target.value)}/>

                <br/><br/>

                <input type="button" value="Calcular IMC" onClick={calcularIMC}/>

                <br/><br/>
                <b>Seu imc</b>: {valorIMC}
            </form>
        </div>
    )
}


export default Formulario;