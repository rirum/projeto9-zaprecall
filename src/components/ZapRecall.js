import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import React from "react";





export default function ZapRecall() {

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