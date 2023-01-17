import React, {useState} from 'react'
import './CadastroLivro.css'
//import { useNavigate } from "react-router-dom";

// import api from '../api';

function CadastroLivro() {
  // const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
       console.log(titulo);
        console.log(descricao);
        console.log(categoria);
      //api.post(`posts`,{text:text}).then(()=>navigate("/read"))
     }
  return (
    <>    
      <div className='container-cadLivro'>
        
            <h1 className='title-submit'>Cadastre seu livro</h1>
        <form className='cadastro-livro' onSubmit={ handleSubmit }>
            <div className='anexo-img'>ANEXAR FOTO</div>

            <div className='info-livro'>
                <div className='box-input-label'>
                  <div className='labels'><label>Titulo do livro</label></div>
                  <input className='input-livro' type='text' onChange={(e) => setTitulo(e.target.value)}/>
                </div>

                <div className='categoria'>
                  <label className='labels'>Categoria</label>
                  <select onChange={(e) => setCategoria(e.target.value)}>
                    <option value="Categoria">Categoria</option>
                    <option value="biografia">biografia</option>
                    <option value="contos">contos</option>
                    <option value="ficção cientifica">ficção cientifica</option>
                    <option value="romance">romance</option>
                  </select>
                </div>

                <div className='box-input-label'>
                  <div className='labels'><label>Descrição</label></div>
                  <input className='input-livro' type='text' onChange={(e) => setDescricao(e.target.value)}/>
                </div>

                
                <button className='btn-submit' type='Submit'>Salvar</button>
            </div>    

        </form>

      </div>
    </>

  )
}

export default CadastroLivro
