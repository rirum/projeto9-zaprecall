import styled from "styled-components";
import React from "react";
import perguntas from "../perguntas";

export default function Footer({quantidadeRespondidos}){
    return(
       <StyledFooter data-test="footer">
        <p>{quantidadeRespondidos}/{perguntas.length} Concluídos</p> 
       </StyledFooter>
    );
}

const StyledFooter = styled.div`

  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  z-index: 2;



.footer-concluidos > .container-botoes {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
}
`