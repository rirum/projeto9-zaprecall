import styled from "styled-components";
import React from "react";
import setaVirar from "../assets/seta_virar.png";
import setaPlay from "../assets/seta_play.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeCerto from "../assets/icone_certo.png";

  const VERDE = "#2FBE34"
  const AMARELO = "#FF922E"
  const VERMELHO = "#FF3030"
  const CINZA = "#333333" 



export const Card = ({quantidadeRespondidos, setQuantidadeRespondidos, index, card: { question, answer }}) => {

  const [ statusCard, setStatusCard ] = React.useState('inicial');
  const [ textoCard, setTextoCard ] = React.useState(`Pergunta ${index + 1}`);
  const [ imagemCard, setImagemCard ] = React.useState(setaPlay)    
  const [ statusCor, setStatusCor ] = React.useState(CINZA);
  const [dataTestImg, setDataTestImg] = React.useState('play-btn');
 
  const abrirCarta = () => {
        setStatusCard ('aberto');
        setImagemCard (setaVirar);
        setTextoCard(question);
        setDataTestImg('turn-btn');

      }

  const responderCarta = () => {
      setStatusCard('resposta');
      setTextoCard(answer);
      }
    
  const manipulaClickImgCard = () => {
      if (statusCard === 'inicial') {
        abrirCarta();
      }else if (statusCard === 'aberto'){
        responderCarta();
      }
    }

  const manipulaClickResposta = (cor, imagem, dataTest) => {
      setStatusCard('final');
      setImagemCard(imagem);
      setTextoCard(`Pergunta ${index + 1}`);
      setQuantidadeRespondidos(quantidadeRespondidos + 1);
      console.log(cor);
      setStatusCor(cor);
      console.log(statusCor);
      setDataTestImg(dataTest);
    }

    return (
      <StyledCard
      data-test='flashcard'
      statusCard={statusCard}
      statusCor={statusCor}
      >

      <p data-test='flashcard-text'>{ textoCard }</p>        

      { (statusCard !== 'resposta') && <img data-test={dataTestImg} onClick={manipulaClickImgCard} src={imagemCard} alt="" /> }  
      { (statusCard === 'resposta') &&
      <ContainerBotoes>
        <StyleBotao data-test='no-btn' onClick={ () => manipulaClickResposta (VERMELHO, iconeErro, 'no-icon')} color={VERMELHO}> Não Lembrei </StyleBotao>
        <StyleBotao data-test='partial-btn' onClick={ () => manipulaClickResposta (AMARELO, iconeQuase, 'partial-btn')} color={AMARELO}> Quase não lembrei </StyleBotao>
        <StyleBotao data-test='zap-btn' onClick={ () => manipulaClickResposta (VERDE, iconeCerto, 'zap-btn')} color={VERDE}> Zap! </StyleBotao>
      </ContainerBotoes>
      } 
      </StyledCard>
       
    );
}

const StyledCard = styled.div `
    ${ props => props.statusCard === 'inicial' || props.statusCard === 'final' ? cartaFechadaStyle : cartaAbertaStyle }

  & p {
    text-decoration: ${props => props.statusCard ==='final' && 'line-through'};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.statusCor};
  }
`;

const ContainerBotoes = styled.div `
display:flex;
gap: 8px;
margin-left: 6px;
margin-right: 6px;
`;

const StyleBotao = styled.div `
  width: 85px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      background: ${ props => props.color };
      border-radius: 5px;
      border: 1px solid ${ props => props.color };
      padding:5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
`;

const cartaFechadaStyle = `
width: 100%;
max-width: 300px;
height: 35px;
background-color: #FFFFFF;
padding: 15px;
margin-top: 20px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const cartaAbertaStyle = `
width: 100%;
max-width: 300px;
padding: 15px;
margin-top: 20px;
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
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
& img {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`;