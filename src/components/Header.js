import logo from "../assets/logo.png"
import styled from "styled-components"
export default function Header(){
    return (
        <div className="logo-container">
        <img src={logo} alt="logo-zap"/>
        <h1>ZapRecall</h1>
        </div>
    );
}

// const ImagemLogo = styled.img`
//   width: 52px;
// `
// substituir o img src como <ImagemLogo src={logo} alt="logo-zap"/> </ImagemLogo>