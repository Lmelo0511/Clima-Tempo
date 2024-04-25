import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/estilosTelas/index.css'
import { ProvedorTema } from './horario/ContextoTema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </React.StrictMode>
);

reportWebVitals();
