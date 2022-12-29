import React from 'react'
import './Section.css'
import onda from './imgs/onda.png'
import retangulo from './imgs/retangulo.png'

function Section() {
  return (
    <div>
      <section className='home'>
                  <div className='home-text'>
                    <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>
                    <p>Se você tem livros antigos ou que ja leu mais de mil vezes, 
                      ou está a procura de uma nova aquisição, aqui é o lugar certo!
                      Livre-se já!</p>
                    <button className='home-btn1'>ENTRE</button> OU
                    <button className='home-btn2'>CADASTRE - SE</button>
                  </div>
            </section>
        <section>
        <img src={onda} alt="placeholder" className='img-onda' />
        </section>

        <section className='home1'>
            <div className='home1-text'>
                    <h1 className='text-h1'>Olá, bem-vindo ao livre-se...</h1>
                    <p className='prg1'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
            </div>
        </section>
    </div>
  )
}

export default Section
