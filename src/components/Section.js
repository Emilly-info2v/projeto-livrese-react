import React from 'react'
import './Section.css'

function Section() {
  return (
    <div>
      <section className='home'>
                <div className='home-text'>
                    {/* <h4 className='text-h4'>olá, bem-vindo ao livre-se...</h4> */}
                    <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>
                    <p className='prg'>Se você tem livros antigos ou que ja leu mais de mil vezes, 
                      ou está a procura de uma nova aquisição, aqui é o lugar certo!
                      Livre-se já!</p>
                    <button className='home-btn1'>ENTRE</button> OU
                    <button className='home-btn2'>CADASTRE - SE</button>

                    <div> 
                      <div className='home-img'></div>
                      <div className='home-img2'></div>
                      <div className='home-img3'></div>
                    </div>   
                </div>
                

            </section>
    </div>
  )
}

export default Section
