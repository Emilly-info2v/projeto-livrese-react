import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from'./../imgs/logo-livrese.jpeg'
import './Login.css'
import LogoWhite from './../imgs/logo-branca.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {HiUserCircle} from 'react-icons/hi'

function Login() {

  const navigate = useNavigate();

  function handleLogin() { 
    navigate('/dashboard')
  }

  return (
    <>
      <div className='section'>
        <div className='fundo'>
        <nav><img className='img-logo1' src={Logo} alt=""/></nav>

        <div className='tela-login'>

          <div className='image'>
            <div className='logo-livrese'>
              <img src={LogoWhite} alt='livre'/>
            </div>
          </div>

          <div className='form'>
            <div className='form-fundo'>
                      <div className='title-login'><h5>Entre com seu login</h5></div>

                <div><HiUserCircle color="#001d49" fontSize="10rem"/></div>
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
              <button className='btn-cadastre' type='Submit' onClick={handleLogin}>Pronto</button>
              <span>Já possui cadastro? <Link to='/login'>Entre com seu login</Link></span>
            </div>
          </div>

        </div>
        <div className='footer-1'> 
          <div className='footer-item'>
            <div className='item-3-f'><BsFacebook color="white" fontSize="3.5rem"/></div>
            <div className='item-3-i'><AiFillInstagram color="white" fontSize="3.5rem"/></div>
            <div className='item-3-t'><AiFillTwitterCircle color="white" fontSize="3.5rem"/></div>
          </div>
          <div className='info-footer'>Info • Suporte</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login