import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>HomPage</h1>
    </div>
  )
}

export default HomePage

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FaBookOpen } from 'react-icons/fa'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import ButtonUp from './ButtonUp'
// import ButtonIn from './ButtonIn'
// import './HomePage.css';
// import { IconContext } from 'react-icons/lib'
// import Section from './Section'
// import SectionProjeto from './SectionProjeto'
// import SectionDestaques from './SectionDestaques'
// import SectionAvaliacoes from './SectionAvaliacoes'
// import SectionParcerias from './SectionParcerias'
// import Footer from './Footer'

// function HomePage() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false)

//   return(
//     <>
//     <IconContext.Provider value={{color: '#fff'}}>
//       <div className='navbar'>
//           <div className='navbar-container container'>
//             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//               <FaBookOpen className='navbar-icon' />
//               LIVRESE
//             </Link>

//             <div className='menu-icon' onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars /> }
//             </div>  

//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//               <li className='nav-item'>
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                   Home
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link to='/projeto' className='nav-links' onClick={closeMobileMenu}>
//                   Projeto
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link to='/destaques' className='nav-links' onClick={closeMobileMenu}>
//                   Destaques
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link to='/avaliacoes' className='nav-links' onClick={closeMobileMenu}>
//                   Avaliações
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link to='/parcerias' className='nav-links' onClick={closeMobileMenu}>
//                   Parcerias
//                 </Link>
//               </li>

//               <li className='nav-btn'  onClick={closeMobileMenu}>
//                 <Link to='/login'>
//                   <ButtonIn />
//                 </Link>
//               </li>
//               <li className='nav-btn'  onClick={closeMobileMenu}>
//                 <Link to='/cadastro'>
//                   <ButtonUp />
//                 </Link>
//               </li>
//             </ul> 
//           </div>
//       </div>
      
//       </IconContext.Provider>
//       <Section />
//       <SectionProjeto />
//       <SectionDestaques />
//       <SectionAvaliacoes/>
//       <SectionParcerias />
//       <Footer/>
//     </> 
//   )
// }

// export default HomePage