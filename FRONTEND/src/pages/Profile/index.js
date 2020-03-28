import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash} from 'react-icons/fi';


import "./style.css";

import LogoImg  from '../../assets/Logo.png';



export default function Profile() {
    return(
        <div className="profile-container">
            <header>
            <img  src={LogoImg} alt="Be The  Hero" /> 
            <span>Bem Vinda APAD</span> 

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button">
              <FiPower size={18} color="#E02041" />
             </button> 
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
            <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição  teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
               <FiTrash size={20} color="#a8a8b3"/> 
            </button>

            </li>
            </ul>
            <br/>

            <ul>
            <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição  teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
               <FiTrash size={20} color="#a8a8b3"/> 
            </button>

            </li>
            </ul>
        </div>
    ); 
    

}