import React from 'react'
import {FaUser,FaLock} from 'react-icons/fa';
import{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {

  const[username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
     console.log(username, password);
    console.log("Envio");

    alert("Enviando os dados: " + username + " - " + password);
  };
 
  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <div className='input-field'>       
        <input type="email" placeholder="E-mail"
        onChange={(e) => setUsername(e.target.value)}/> 
        <FaUser className='icon'/>
        </div>
        <div className='input-field'>
        <input type="passWord" placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}/>
        <FaLock className='icon'/>
        </div>

        <div className='recall-forget'>
          <label>
            <input type="checkbox" /> 
            Lembre de mim
          </label>
          <a href='#'>esqueceu a senha?</a>

        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>Não tem uma conta? <a href="/Cadastrar"> Registrar </a></p>
        </div>
        
        
         </form>
    </div>
  )
}

export default Login
