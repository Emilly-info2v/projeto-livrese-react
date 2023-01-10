import React from 'react'
import './Section.css'
import Library from './imgs/library.png' 
// import { Link } from 'react-router-dom'
// import ButtonInSection from './ButtonInSection'
// import ButtonUpSection from './ButtonUpSection'


function Section() {

  return (
    <section>
      <div className='container-home'>

        <div className='title'>
          <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>

          <p>Se você tem livros antigos ou que ja leu mais de 
            mil vezes, ou está a procura de uma nova aquisição, 
            aqui é o lugar certo! Livre-se já!</p>
        </div>

        <img className='img-section' src={Library} alt='library'/>
      </div>
    </section>
  )
}

export default Section
