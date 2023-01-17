import React from 'react'
import './Sidebar.css'
import Logo from './../imgs/logo-livrese.jpeg'

function Sidebar() {
  return (
      <>
      <div className='sidebar'>

      <ul className='u1-side'>
           <li><img src={Logo} className='baby' alt='oi'/></li>
           <li className='side-li'><a href="#">Página Inícial</a> </li>
           <li className='side-li'><a href="#"> Livros Disponíveis</a></li>
           <li className='side-li'><a href="#"> Cadastro de Livros</a></li>
       </ul>
      </div>
      </>
  )
}

export default Sidebar
