import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/28/COL-3586-128/COL-3586-128_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
