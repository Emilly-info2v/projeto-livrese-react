import React from 'react'
// import { MdEmail, MdLock } from 'react-icons/md'
// import { HiEyeOff, HiEye } from "react-icons/hi";
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from'./../imgs/icon.png'
import './Cadastro.css'

function Cadastro() {
  return (
    <div className='body'>
    <div className='contaneir'>
      <div className='form'>
        <form>
          <div className='form-header'>
            <div className='title'>
              <h1>Faça seu cadastro</h1>
                <span><img src={LogoIcon} alt=''className='img-icon'/></span>
            </div>
          </div>
          <div className='input-group'>
                <div className='input-box'>
                  <label>Primeiro nome</label>
                  <input className='first-name'
                  type='text'
                  placeholder='Digite seu primeiro nome'
                  required
                  />
                </div>
                <div className='input-box'>
                  <label>Sobrenome</label>
                  <input className='last-name'
                  type='text'
                  placeholder='Digite seu sobrenome'
                  required
                  />
                </div>
                <div className='input-box'>
                  <label>E-mail</label>
                  <input className='email'
                  type='email'
                  placeholder='Digite seu email'
                  required
                  />
                </div>
                
                <div className='input-box'>
                  <label>Telefone</label>
                  <input className='number'
                  type='tel'
                  placeholder='(xx) xxxxx-xxxx'
                  required
                  />
                </div>

                <div className='input-box'>
                  <label>Senha</label>
                  <input className='password'
                  type='password'
                  placeholder='Digite sua senha'
                  required
                  />
                </div>

                <div className='input-box'>
                  <label>Confirme a senha</label>
                  <input className='password'
                  type='password'
                  placeholder='Digite sua senha novamente'
                  required
                  />
                </div>

              </div>
          <div className='btn-cadastrar'>
            <button><Link>Cadastrar</Link></button>
          </div>
        </form>
            <div className='text'>
              <span className='txt-1'>Tenho uma conta? </span>
              <Link to='/login'className='txt-2'>Fazer login </Link>
            </div>
      </div>
    </div>
    </div> 
  )
}

export default Cadastro