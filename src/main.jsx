import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from"react-router-dom";
import Home from './routes/Inicio.jsx';
import Desafios from './routes/Desafio.jsx';
import SobreNos from './routes/SobreNos.jsx';
import Solucao from './routes/Solucao.jsx';
import Login from './routes/Entrar.jsx';
import Cadastrar from './routes/Cadastrar.jsx';
import Navbar from './assets/components/Navbar.jsx';
/*const router = createBrowserRouter([
{  
  path: "/",
  element: <Home />
},
{
  path: "Desafio",
  element: <Desafios />
},
{
  path: "Solucao",
  element: <Solucao />
},
{
  path:"Sobrenos",
  element: <SobreNos />
}

],
);
*/

const router = createBrowserRouter([
  {  
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "Desafio",
        element: <Desafios />
      },
      {
        path: "Solucao",
        element: <Solucao />
      },
      {
        path:"Sobrenos",
        element: <SobreNos />
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "Cadastrar",
        element: <Cadastrar/>
      }
    
    ]
  },

  
  ],
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} /> 
  </React.StrictMode>,
)
