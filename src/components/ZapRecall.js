import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Lista from "./Lista";
import React from "react";





export default function ZapRecall(props) {

  const [cartaAberta, setCartaAberta] = React.useState([]);
  const [quantidadeRespondidos, setQuantidadeRespondidos] = React.useState(0);
  const [statusJogo, setStatusJogo] = React.useState("inicio");
   
  
      /* Você vai precisar trocar a cor dos botões e alguns textos!
      const VERDE = "#2FBE34"
      const AMARELO = "#FF922E"
      const VERMELHO = "#FF3030"
      const CINZA = "#333333" 
    */ 
    // function contagemRespostas(){
    //     const novaResposta = respostas + 1
    //     setRespondidos(novaResposta)
    //     console.log(novaResposta)
    // }

    return (
      
      <Conteudo>
      
      
      <Header />
      <Lista
       cartaAberta = {cartaAberta}
       setCartaAberta = {setCartaAberta}
       statusJogo = {statusJogo}
       setStatusJogo ={setStatusJogo}
       quantidadeRespondidos = {quantidadeRespondidos}
       setQuantidadeRespondidos = {setQuantidadeRespondidos}

      />
      <Footer 
        quantidadeRespondidos = {quantidadeRespondidos} 
      />
      
      
      </Conteudo>
      
    );
  }

  const Conteudo = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`