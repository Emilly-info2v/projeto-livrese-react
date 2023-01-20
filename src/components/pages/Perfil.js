import React from 'react'
import './Perfil.css'
import Logo from'./../imgs/logo-livrese.jpeg'
import Azul from'./../imgs/perfil.png'
import Edit from'./../imgs/edit.png'
import Config from'./../imgs/config.png'
import {HiUserCircle} from 'react-icons/hi'

function Perfil() {
  return (
    <>
        <section>
        <nav>
        <a href="#section-home"><img className="baby" src={Logo} alt='livre -se'/></a> 
        
        <div className="nav-limks"> 
          <ul className="navig"> 
            <a href="#"><li className="nav-itens"><HiUserCircle color='orange'fontSize="3.5rem"/></li></a>
            <a href="#"><li className="nav-itens"><HiUserCircle fontSize="3.5rem"/></li></a>
            <a href="#"><li className="nav-itens"><HiUserCircle fontSize="3.5rem"/></li></a>
          </ul>
        </div>
      </nav>
        <div className='perfil-fundo'>
            <div className='perfil'>
                <img src={Azul}/>
                <div className='topo'>
                    <p>Seu Perfil</p>
                    <div className='topo-2'>
                        <div className='items-topo'><img src={Edit}/></div>
                        <div className='items-topo'><img src={Config}/></div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Perfil
