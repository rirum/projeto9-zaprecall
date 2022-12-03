import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import React from "react";





export default function ZapRecall(props) {

    const [respondidos, setRespondidos] = React.useState([]);
    const [cartaAberta, setCartaAberta] = React.useState([]);
    const [mostrarCarta, setMostrarCarta] = React.useState(false);
   
  
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
      <Card/>
      <Footer />
      
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