import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
