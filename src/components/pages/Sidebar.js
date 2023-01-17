import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Logo from './../imgs/logo-livrese.jpeg'

function Sidebar() {
  return (
      <>
      <div className='sidebar'>

      <ul className='u1-side'>
           <li><img src={Logo} className='baby' alt='oi'/></li>
           <Link><li className='side-li'>Página Inícial</li></Link>
           <Link><li className='side-li'>Livros Disponíveis</li></Link>
           <Link><li className='side-li'>Cadastro de Livros</li></Link>
       </ul>
      </div>
      </>
  )
}

export default Sidebar
