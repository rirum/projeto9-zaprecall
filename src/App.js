import Header from "./components/Header";
import Deck from "./components/Deck";
import Flashcard from "./components/Flashcard";
import Footer from "./components/Footer";
import styled from "styled-components"; // ou usa o css ou o styled componentes
import GlobalStyle from "./css/GlobalStyle";


export default function App() {
  return (
    <>
    <div className="App screen-container" >
    
    
    <Header />
    <GlobalStyle />
    <Deck />
    <Flashcard />
    <Footer />
    </div>
    </>
  );
}

// const Conteudo = styled.div`
//  background-color: #FB6B6B;
//   width: 100vw;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0px;
//   padding: 0px;
//   padding-bottom: 200px;
// `