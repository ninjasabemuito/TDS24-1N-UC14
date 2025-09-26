import "./CardJogador.css"
export default function CardJogador({nome, posicao, time, avaliacao, imagem}){
    // corpo do componente (tudo que for retornando aqui será renderizado na tela)
    return(
        //Elemento raiz do card (agrupando o conteúdo do jogador )
        <article className="card-jogador"> 
        <div className="cj-cabecalho">
            {/* Imagem do jogador
            * src: caminho/url da imagem 
            * alt: texto alternativo para acessibilidade
            * ClassName: para aplicar estilo
            */}
            <img src= {imagem} alt= {nome} className= "cj-imagem"/>
            {/**Bloco de informações textuais ao lado da imagem */}
            <div className="cj-info">
                {/**Nome do jogador */}
                <h3 className="cj-nome">{nome}</h3>
                <span className="cj-etiqueta"> {posicao}</span>
            </div>  
                {/** Área de informações resumidas como time e avaliação */}
                <div className="cj-meta">
                    <span><strong> Time:</strong> {time}</span>
                    <span><strong> Avaliação:</strong>{avaliacao}</span>
                </div>

        </div>
        </article>
    )
}