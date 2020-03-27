import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import LogoImg  from '../../assets/Logo.png';

import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return (

        <div className="teste">
            <section className ="form">
             
            <img  src={LogoImg} alt="Be The  Hero" />   
                

                <form>
                <h1>Faça  seu logon </h1>

                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>

                <a href="/register">
                  <FiLogIn size="16" color="E02041"  ></FiLogIn>  
                 Não tenho Cadastro
                </a>

                </form>
                </section> 

            <img  src={heroesImg} alt="Heroes" />
        </div>
          
    );
}