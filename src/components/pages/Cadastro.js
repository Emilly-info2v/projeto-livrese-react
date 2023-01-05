import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")

  return (
    <div className='container-2'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='title-login'>Faça o seu cadastro no Livre - se</span>
            <span className='title-login'><FaBookOpen className='login-icon' /></span>

            <div className='wrap-input'>
              <input 
                className={name !== "" ? 'has-val input' : 'input'} 
                type= "text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nome completo'></span>
            </div>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type= "text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={password !== "" ? 'has-val input' : 'input'} 
              type= "password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Passaword'></span>
            </div>
            
            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Cadastrar</button>
            </div>

            <div className='text-center'>
              <span className='txt-1'>Já tenho uma conta? </span>
              <Link to='/login'className='txt-2'>Faça login </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro