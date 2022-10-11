import React from 'react';
import ReactDOM from 'react-dom/client';
import { Indecisionapp } from './Components/Indecisionapp';
import 'normalize.css/normalize.css'
import './Styles/style.scss';


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Indecisionapp />
  </React.StrictMode>
);