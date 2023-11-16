import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXT};

    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    -webkit-font-smoothing: antialiased;
  
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    outline: none;
    line-height: 160%;
  }

  a {
    text-decoration: none;
    color: inherit
  }

h1{
  color:${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 8px;
}
  

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`