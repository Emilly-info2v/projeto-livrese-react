import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
import ButtonInSection from './ButtonInSection'
import ButtonUpSection from './ButtonUpSection'


function Section() {

  return (
    <div>
      <section className='home'>
                  <div className='home-text'>
                    <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>
                    <p>Se você tem livros antigos ou que ja leu mais de mil vezes, 
                      ou está a procura de uma nova aquisição, aqui é o lugar certo!
                      Livre-se já!</p>

                      <ul className='btn-section'>
                          <li><Link to='/login'>
                            <ButtonInSection />
                          </Link></li> OU
                          <li>
                          <Link to='/cadastro'>
                            <ButtonUpSection />
                          </Link>
                          </li>
                      </ul> 
                  </div>
            </section>
    </div>
  )
}

export default Section
