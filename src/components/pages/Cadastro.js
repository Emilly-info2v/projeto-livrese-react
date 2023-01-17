import React from 'react'
// import { MdEmail, MdLock } from 'react-icons/md'
import { HiEyeOff, HiEye } from "react-icons/hi";
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../imgs/logo-livrese.jpeg'
import LogoWhite from './../imgs/logo-branca.png'
import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className='section'>
        <div className='fundo'>
        <nav><img className='img-logo1' src={Logo} /></nav>

        <div className='tela-login'>

          <div className='image'>
            <div className='logo-livrese'>
              <img src={LogoWhite} alt='livre'/>
            </div>
          </div>

          <div className='form'>
            <div className='form-fundo'>
                      <h4>Cadastre - se</h4>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu nome'
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu sobrenome'
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='dd/mm/aaaa'
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu email'
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Crie uma senha'
                />
              </div>
              <button className='btn-cadastre' type='Submit'>Submit</button>
              <span>Já possui cadastro? <Link to='/login'>Entre com seu login</Link></span>
            </div>
          </div>

        </div>
        <div className='footer-1'> 
          <div className='footer-item'>
            <div className='item-3-f'>F</div>
            <div className='item-3-i'>I</div>
            <div className='item-3-t'>T</div>
          </div>
          <div className='info-footer'>Info • Suporte</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro