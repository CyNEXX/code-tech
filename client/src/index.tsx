import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
/* import './fonts/software_tester/software_tester_7.ttf';
import './img/inflicted.png'; */
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/global';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <GlobalStyle/>
      <App />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
