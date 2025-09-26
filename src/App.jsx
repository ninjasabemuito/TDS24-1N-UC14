import React from "react";
import CardJogador from "./components/CardJogador";
import Titulo from "./components/Titulo";

// Função principal do App
export default function App(){
  // Array de objetos representando os jogadores 
  // Cada objeto tem id e as props nome, posicao, time, avaliacao e imagem
  const jogadores = [
    {
      id: 1, 
      nome: "Neymito",
      posicao: "atacante", 
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSq-FoDF-DbpqB35H4BHxMHwzDeMYszGQIkgim1D-YNaolwhl_d3QYH_0-b9XdQ0OVdbmmzk8gJ-h4xb6UgJsWCJSSr3j_DKpQlML1TrjF",
      avaliacao: 100


    },
    { 
      id: 2, 
      nome: "Cristiano Ronaldo",
      posicao: "Atacante",
      avaliacao: 100, 
      time: "Al-Nassr",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/05/cristiano-ronaldo-al-nassr-e1748545811213.jpg?w=1200&h=900&crop=1",
      
    }
  ]
  return(
    <main
    style={{
      display: "flex",
      gap: "20px", // espaço entre os cards 
      justifyContent: "center",
      marginTop: "50px",
      flexWrap: "wrap" // permite a quebra de linha se a tela for pequena 
    }}
>
    {/**Componente de Titulo */}
    <div style={{width: "100%"}}>
      <Titulo texto= "Lista de jogadores"/>
    </div>
    {/** Percorre o array de jogadores com .map */}
    {/** Para cada jogador cria um CardJogador */}
    {
    jogadores.map((j) => (
      // Key é necessário para o React identificar cada item da lista
      //{...} espalhar todas as props(nome, posicao, time, avaliacao, imagem)
      <CardJogador key={j.id}{...j}/>
    ))
    }
    </main>
  )
}