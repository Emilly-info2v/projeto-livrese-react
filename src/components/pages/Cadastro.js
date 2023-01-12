import React from 'react'
// import { MdEmail, MdLock } from 'react-icons/md'
// import { HiEyeOff, HiEye } from "react-icons/hi";
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from'./../imgs/icon.png'
import Logo from './../imgs/logo-livrese.jpeg'
import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className='section'>
        <div className='fundo'>
        <nav><img className='img-logo1' src={Logo} /></nav>

        <div className='tela-login'>
          <div className='image'></div>
          <div className='form'></div>
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