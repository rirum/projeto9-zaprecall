import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Lista from "./Lista";
import React from "react";

export default function ZapRecall(props) {

  const [cartaAberta, setCartaAberta] = React.useState([]);
  const [quantidadeRespondidos, setQuantidadeRespondidos] = React.useState(0);
  const [statusJogo, setStatusJogo] = React.useState("inicio");
   
  


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