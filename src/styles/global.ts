import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  #root {
    
  }
`;

export default GlobalStyle;


export const AppContainer = styled.div`
  margin: 20px 90px 0 90px;

  @media only screen and (max-width: 768px) {
    margin: 10px 20px 0 20px;
   }
`