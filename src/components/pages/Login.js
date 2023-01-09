import React from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Logo from'./../imgs/logo-livrese.jpeg'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [show,setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <> 
      <div className='login'>
        <div className='img-logo'>
          <img src={Logo} alt="Livre -se"/>
        </div>

          <div className='login-right'>
                    <h2>Entre com o seu login</h2>
            <div className='loginInputEmail'>
              <MdEmail />
              <input
              type='text'
              placeholder='Digite o seu e-mail'
              valeu={email}
              onChange={e => setEmail(e.target.value)}
              />
            </div>
            
            <div className='loginInputPassword'>
              <MdLock/>
              <input
              type={show ? 'text' : 'password'}
              placeholder='Digite a sua senha'
              valeu={password}
              onChange={e => setPassword(e.target.value)}
              />
              <div className='login-eye'>
                {show ? (
                  <HiEye onClick={handleClick}/>
                ) : (
                  <HiEyeOff onClick={handleClick}/>
                )}
              </div>
            </div>

            <button type='submit'>
              Entrar
            </button>

            <div className='text-center'>
              <span className='txt-1'>Não tenho uma conta? </span>
              <Link to='/cadastro'className='txt-2'>Criar conta </Link>
            </div>

          </div>
      </div>
    </>
  )
}

export default Login