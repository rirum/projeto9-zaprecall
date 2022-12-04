import styled from "styled-components";
import React from "react";
import perguntas from "../perguntas";
import { Card } from "./Card";


export default function Lista({quantidadeRespondidos, setQuantidadeRespondidos}){
  
    return (
                  
            <StyledLista>
              {perguntas.map ((pergunta, index) =>                   
                  <Card                   
                  index={ index }
                  card={ pergunta }
                  quantidadeRespondidos={quantidadeRespondidos}
                  setQuantidadeRespondidos={setQuantidadeRespondidos}
                  /> 
                )} 
              </StyledLista>             
              
 );
}

const StyledLista = styled.div`
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;       
`