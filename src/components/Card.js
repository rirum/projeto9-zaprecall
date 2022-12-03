import styled from "styled-components";
import React from "react";
import setaVirar from "../assets/seta_virar.png";
import setaPlay from "../assets/seta_play.png";
import perguntas from "../perguntas";




export default function Card({statusJogo,respondidos, setRespondidos,cartaAberta, setCartaAberta}){


 
 function abreCartao(carta){

   const cartas = [cartaAberta, perguntas.question]
   setCartaAberta(cartas);
   console.log(cartas);

    }
    

    return (
       <>
            
            {perguntas.map ((pergunta) => ( 
            <StyledPerguntaFechada> 
            <p>Pergunta {pergunta.id}</p>
            <img src={setaPlay} onClick={()=>abreCartao()} alt="seta"/>
            </StyledPerguntaFechada>
            ))}
            {perguntas.map((pergunta) =>(
            <StyledPerguntaAberta
            
            >
            <p>{pergunta.question}</p>
            <img src={setaVirar}/>
            </StyledPerguntaAberta>
          ))}
            <StyledPerguntaAberta>
            <p>Letra maiúscula</p>
            <StyledBotoes>
            <button>Não lembrei</button>
            <button>Quase não lembrei</button>
            <button>Zap!</button>
            </StyledBotoes>
            </StyledPerguntaAberta>
          
            </>
        
       
    );
}

const StyledBotoes = styled.div `
display:flex;
gap: 8px;
margin-left: 6px;
    button{
      width: 90px;
      font-family: 'Recursive', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      background: #FF922E;
      border-radius: 5px;
      border: 1px solid #FF922E;
      padding:5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    
    }
`

const StyledPerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${props => (props.clicked ? 'flex' : 'none')};
 
  flex-direction: column;
  justify-content: space-between;
     img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        }
        

`
const StyledPerguntaFechada = styled.div`

  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
     p {
            font-family: 'Recursive', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
        }       
`