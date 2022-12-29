import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import ButtonUp from './ButtonUp'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import ButtonIn from './ButtonIn'
import Section from './Section'
import Section2 from './Section2'
import Section3 from './Section3'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaBookOpen className='navbar-icon' />
              LIVRESE
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars /> }
            </div>   
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Sobre Nós
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contatos' className='nav-links' onClick={closeMobileMenu}>
                  Contatos
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/registros' className='nav-links' onClick={closeMobileMenu}>
                  Registros
                </Link>
              </li>
              <li className='nav-btn'  onClick={closeMobileMenu}>
                <Link to='/sign-in'>
                  <ButtonIn />
                </Link>
              </li>
              <li className='nav-btn'  onClick={closeMobileMenu}>
                <Link to='/sign-up'>
                  <ButtonUp />
                </Link>
              </li>
            </ul> 
          </div>
      </div>
      </IconContext.Provider>
      <Section />
      <Section2 />
      <Section3 />
    </> 
  )
}

export default Navbar