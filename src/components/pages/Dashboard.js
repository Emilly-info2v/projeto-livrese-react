import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Logo1 from './../imgs/logo-livrese.jpeg'
import Sidebar from '../Sidebar'
import {HiUserCircle} from 'react-icons/hi'
import Harry from './../imgs/harry.png' 
import Monica from './../imgs/monica.png' 
import Ingles from './../imgs/ingles.png' 
import Colorido from './../imgs/livro-meio.png' 

function Dashboard() {
  return (
      <>
      <nav>
        <a href="#section-home"><img className="baby" src={Logo1} alt='livre -se'/></a> 
        
        <div className="nav-limks"> 
          <ul className="navig"> 
            <Link to='/user'><li className="nav-itens"><HiUserCircle fontSize="3.5rem"/></li></Link>
            <a href="#"><li className="nav-itens"><HiUserCircle fontSize="3.5rem"/></li></a>
          </ul>
        </div>
      </nav>
      <div className='desktop-grid'>
        <Sidebar/>
        <div className='fundo-disp'>
          <div className="input-grou">
            <input type="text" className="input-pesquisa" placeholder='Pesquisar'/>
              <span><button className="btn-buscar">Buscar</button></span>

              <div className='categ'>
                <div className='title-categ'>Categoria</div>
                <ul className='list-categ'>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                </ul>
              </div>
              <div className='book-disp'>
                <div className='title-disp'>Livros disponíveis</div>
                <div className='imgs-disp'>

                    <div className='list-disp disp-first'>
                      <img src={Harry} alt=''/>
                      <div className='disp-first'>
                        <p>Coraline</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-second'>
                      <img src={Monica} alt=''/>
                      <div className='disp-second'>
                        <p>A conquista da Matemática 9</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-tercy'>
                      <img src={Ingles} alt=''/>
                      <div className='disp-tercy'>
                        <p>Harry Potter e o cálice de fogo</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-quart'>
                      <img src={Colorido} alt=''/>
                      <div className='disp-quart'>
                        <p>Dicionário Aurélio</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                </div>
              </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Dashboard
