import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";


import GlobalStyle from "./styles/global";
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <GlobalStyle/>
    <Router/>
    </ThemeProvider>
  </React.StrictMode>,
)
