import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
import ButtonUpSection from './ButtonUpSection'
import Library from './imgs/library.png' 
import Onda from './imgs/onda.png' 
import Monica from './imgs/monica.png' 
import Ingles from './imgs/ingles.png' 
import Harry from './imgs/harry.png' 

function Section() {
  
  return (
    <>
      <h1>OOOOO</h1>
    </>
    // <section>
    //   <div className='container-home'>
    //     <img className='img-library' src={Library} alt='biblioteca'/>
    //     <div className='container-text'>
    //         <h1 className='text-h1'>OLÁ, BEM-VINDO AO LIVRE-SE...</h1>
    //         <p className='text-p'>Se você tem livros antigos ou que ja leu mais de 
    //         mil vezes, ou está a procura de uma nova aquisição, 
    //         aqui é o lugar certo!<p className='text-p1'></p> Livre-se já!</p>

    //         <ul className='ul-btn'>
    //           <li>
    //             <Link to='/cadastro'>
    //               <ButtonUpSection />
    //             </Link>
    //           </li>
    //         </ul>
    //     </div>  

    //     <div className='container-imgs'>
    //       <img className='img-monica' src={Monica} alt='monica'/>
    //       <img className='img-ingles' src={Ingles} alt='ingles'/>
    //       <img className='img-harry' src={Harry} alt='harry'/>
    //     </div>
    //   </div>
    //     <div className='container-onda'>
    //       <img className='img-onda' src={Onda} alt='onda  '/>
    //     </div>
    // </section>
  )
}

export default Section
