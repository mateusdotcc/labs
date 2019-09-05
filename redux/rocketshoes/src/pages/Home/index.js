import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-infuriate-iii-low-masculino/82/HZM-1283-182/HZM-1283-182_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-infuriate-iii-low-masculino/82/HZM-1283-182/HZM-1283-182_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-infuriate-iii-low-masculino/82/HZM-1283-182/HZM-1283-182_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-infuriate-iii-low-masculino/82/HZM-1283-182/HZM-1283-182_detalhe1.jpg?resize=280:280"
          alt="Tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
