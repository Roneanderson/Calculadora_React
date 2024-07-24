import { useEffect, useState } from "react"

const Formulario = () => {
    let[peso, setPeso] = useState(0);
    let[altura, setAltura] = useState(0);
    let[resultado, setResultado] = useState(0)
    const[nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("estado mudou");
    }, [nome]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }

        const rederizaResultado = () => {
        const soma = peso / altura / altura;
        const media = soma;

        if (media <= 18,50) {
            return (
                <p>Olá {nome}, seu IMC é {media} Peso Normal</p>
            )
        } else {
            return (
                <p>Olá {nome}, seu IMC é {media} abaixo do peso</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Digite seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Digite sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <button type="btn" onClick={setResultado} onChange={resultado}>Calcular</button>
            {rederizaResultado()}
        </form>
    )
}


export default Formulario;