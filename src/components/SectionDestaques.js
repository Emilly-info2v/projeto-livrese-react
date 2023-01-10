import React from 'react'
import './SectionDestaques.css'

function SectionDestaques() {
  return (
    <>
      <div className='container-destaques'>
          
          <div className='box-3'>
            <h2>Destaques</h2>
            <p> Esses são alguns livros que foram postados recentemente e estão disponíveis no livre-se</p>
          </div>
                <div className='linha'></div>
          <div className='box-4'>
                <div className='item-1'>BOLA 1</div> 
                <div className='linha-horiz'></div>
                <div className='item-2'>
                  <h2>Percy Jackson e O mar de monstros</h2>
                  <p>nossos heróis partem em uma arriscada e incrível viagem pelo Mar de Monstros, 
                  localizado nas coordenadas 30-31-75-12: uma referência ao Triângulo das Bermudas. Lá, 
                  enfrentam seres fantásticos e muitos perigos e situações inusitadas, que põem à prova 
                  seu heroísmo e sua herança – quando Percy irá questionar se ser filho de Poseidon é 
                  uma honra ou uma terrível maldição.</p>
                </div>
          </div>
      </div>
      
    </>
  )
}

export default SectionDestaques