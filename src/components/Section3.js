import React from 'react'
import './Section3.css'
import retangulo from './imgs/retangulo.png'

function Section3() {
  return (
    <div>
      <section className='home'>
            <div className='home-text'>
              <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>
                  <p className='prg'> Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 
                  years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                  </p>
            </div>
            <div className='home-img'>
            <img src={retangulo} alt="placeholder" className='img-retangulo' />
            </div>
        </section>
    </div>
  )
}

export default Section3
