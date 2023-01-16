import React from 'react'

function CadastroLivro() {
  return (
    <div>
      <form>
          <h1>cadastre seu livro</h1>
          <label>Titulo do livro</label>
          <input type='text'/>
          <select>
            <option>Categoria</option>
            <option>biografia</option>
            <option>contos</option>
            <option>ficção cientifica</option>
            <option>romance</option>
          </select>
          <label>Descrição</label>
          <input type='text'/>
          <input type='file'/>
          <button>destacar</button> <button>Salvar</button>          
      </form>
    </div>
  )
}

export default CadastroLivro
