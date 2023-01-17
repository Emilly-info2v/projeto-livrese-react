import React from 'react'
import './HomePage.css'
import ButtonIn from './ButtonIn'
import ButtonUp from './ButtonUp'
import { Link } from 'react-router-dom'
import ButtonUpSection from './ButtonUpSection'
import Logo from './imgs/logo-livrese.jpeg'
import Library from './imgs/library.png' 
import Onda from './imgs/onda.png' 
import Monica from './imgs/monica.png' 
import Ingles from './imgs/ingles.png' 
import Harry from './imgs/harry.png' 
import Trian from './imgs/trian-aval.png' 
import First from './imgs/first-livro.png' 
import Second from './imgs/livro-meio.png' 
import Tercy from './imgs/ultimo-livro.png' 
import { BsStarFill } from 'react-icons/bs'

function HomePage() {
  return (
    <>
      <nav>
        <a href="#section-home"><img className="baby" src={Logo} alt='livre -se'/></a> 
        
        <div className="nav-links"> 
          <ul className="navigation"> 
            <a href="#section-destaques"><li className="nav-items">Destaques</li></a>
            <a href="#section-aval"><li className="nav-items">Avaliações</li></a>
            <a href="#section-parcerias"><li className="nav-items">Parcerias</li></a>
            <a href="#footer"><li className="nav-items">Sobre</li></a>
            <Link to='/login'> <li className="nav-btn"> <ButtonIn /></li></Link>
            <Link to='/cadastro'> <li className="nav-btn"> <ButtonUp /> </li> </Link>
          </ul>
        </div>
      </nav>
{/* section home */}
      <main>
        <section id="section-home">
          <div className='container-home'>
            <img className='img-library' src={Library} alt='biblioteca'/>
            <div className='container-text'>
                <h1 className='text-h1'>OLÁ, BEM-VINDO AO LIVRE-SE...</h1>
                <p className='text-p'>Se você tem livros antigos ou que ja leu mais de 
                mil vezes, ou está a procura de uma nova aquisição, 
                aqui é o lugar certo!<p className='text-p1'></p> Livre-se já!</p>

                <ul className='ul-btn'>
                  <li>
                    <Link to='/cadastro'>
                      <ButtonUpSection />
                    </Link>
                  </li>
                </ul>
            </div>  

            <div className='container-imgs'>
              <img className='img-monica' src={Monica} alt='monica'/>
              <img className='img-ingles' src={Ingles} alt='ingles'/>
              <img className='img-harry' src={Harry} alt='harry'/>
            </div>
          </div>
          <div className='container-onda'>
            <img className='img-onda' src={Onda} alt='onda'/>
          </div>
        </section>

{/* section destaques */}
        <section id="section-destaques">

          <div className='container-destaques'>
              
              <div className='box-3'>
                <h2 className='title-destaque'>Destaques</h2>
                <p> Esses são alguns livros que foram postados recentemente e estão disponíveis no livre-se</p>
              </div>
                  <div className='linha'></div>
                  <div className='box-4'>
                        <div className='item-1'></div> 
                        <div className='linha-vertical'></div>
                        <div className='item-2'>
                          <h2>PERCY JACKSON E O MAR DE MONSTROS</h2>
                          <p>nossos heróis partem em uma arriscada e incrível viagem pelo Mar de Monstros, 
                          localizado nas coordenadas 30-31-75-12: uma referência ao Triângulo das Bermudas. Lá, 
                          enfrentam seres fantásticos e muitos perigos e situações inusitadas, que põem à prova 
                          seu heroísmo e sua herança – quando Percy irá questionar se ser filho de Poseidon é 
                          uma honra ou uma terrível maldição.</p>
                          <button className='btn-reserve'>Reservar</button>
                  </div>
                        <div className='disponivel'> 
                          <h1>2</h1>
                          <h4>Disponíveis</h4> 
                        </div>
              </div>
          </div>
        </section>

{/* section avaliação */}
        <section id="section-aval">
          <div className='container-aval'>
            <img className='img-aval' src={Trian}/>
            <div className='second-container'>
              <div className='left-avaliacao'>
                <div><h1>AVALIAÇÕES</h1></div>
                <div className='img-books'>
                  <img className='book1' src={First} alt='book'/>
                  <img className='book2' src={Second} alt='book'/>
                  <img className='book3' src={Tercy} alt='book'/>
                </div>                  
              </div>
              <div className='commits'>
                <div className='box-commits box-commit1'>
                  <div className='img-user'></div>               
                  <div className='avaliacao-user'>
                    <h6>Billie Eilish</h6>
                    <p>Sed sagittis orci leo, eu suscipit eros, Sed 
                      sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros</p>  
                      <div className='icons-star'>
                        <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                      </div>
                  </div>               
                </div>
                <div className='box-commits box-commit1'>
                  <div className='img-user'></div>               
                  <div className='avaliacao-user'>
                    <h6>Harry Styles</h6>
                    <p>Sed sagittis orci leo, eu suscipit eros, Sed 
                      sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros</p>  
                      <div className='icons-star'>
                        <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                      </div>
                  </div>               
                </div>
                <div className='box-commits box-commit1'>
                  <div className='img-user'></div>               
                  <div className='avaliacao-user'>
                    <h6>Melanie Martinez</h6>
                    <p>Sed sagittis orci leo, eu suscipit eros, Sed 
                      sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros
                      Sed sagittis orci leo, eu suscipit eros</p>  
                      <div className='icons-star'>
                        <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                      </div>
                  </div>               
                </div>
                {/* <div className='box-commits box-commit2'>CAIXA 2</div>
                <div className='box-commits box-commit3'>CAIXA 3</div> */}
              </div>

            </div>
          </div>
        </section>

{/* section parcerias */}
        <section id="section-parcerias">
          <div className='container-parcerias'>

            <div className='box-1'>
              <h1>Parcerias</h1>
            </div>

            <div className='box-2'>
              <div className='box-item'>BOLA 1</div>
              <div className='box-item'>BOLA 2</div>
              <div className='box-item'>BOLA 3</div>
              <div className='box-item'>BOLA 4</div>
            </div>

          </div>
        </section>
    </main>

{/* footer */}
        <footer id="footer">
          <div className='footer-1'> 
            <div className='footer-item'>
              <div className='item-3-f'>F</div>
              <div className='item-3-i'>I</div>
              <div className='item-3-t'>T</div>
            </div>
            <div className='info-footer'>Info • Suporte</div>
          </div>
        </footer>
    </>
  )
}

export default HomePage
