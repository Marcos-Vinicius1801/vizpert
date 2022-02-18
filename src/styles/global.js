import styled, { createGlobalStyle } from "styled-components";
import backgroundImg  from "../assets/background.svg";



export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    height: 100%;
}

html {
    @media (max-width: 1080px){
        font-size:93.75%;
    }
    
    @media (max-width: 720px){
        font-size:87.5%;
    }
    
}
body{
    background: no-repeat top url(${backgroundImg});
}

ul{
    list-style:none;
}

`


export const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
   

`;

export const Container = styled.div`
  
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
 

`