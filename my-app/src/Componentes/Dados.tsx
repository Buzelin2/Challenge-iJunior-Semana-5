import React from "react"

function Dados(props){
const numero = props.numero
const valor = props.valor
const porcentagem = props.porcentagem
return(
    <div>
        <h1 onClick={props.calcular(valor,porcentagem,numero)}>  </h1>
    </div>
)

}
export default Dados