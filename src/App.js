import React, { useState, useEffect } from 'react'
import {Produtos, Navbar}from './components';
import listaProdutos from './components/produtos/ListaProdutos.js';

export const App = () => {
  const [carrinho, setCarrinho] = useState({});
const adicionaCarrinho = () => {
    const item = listaProdutos.filter(obj => obj.id);
      console.log(item)
    setCarrinho(item.id);
  };
  
  return (
    <div> 
      <Navbar/>
      <Produtos produtos={listaProdutos}/>
    </div>
  )
}
export default App;
//rafce