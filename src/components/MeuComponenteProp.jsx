import React from "react";
//Componente com propiedades
const MeuComponenteProp = ({nome}) =>{
    return(
        <div className="container"> 
        <h1>Olá, {nome}!</h1>
        </div>
    )
}
export default MeuComponenteProp;