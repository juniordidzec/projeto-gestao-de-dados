import React, { useState } from 'react';

import Cart from '../../assets/buy.png';
import Icon from '../../assets/icon.png';

import { Container } from './style';


const Home: React.FC = () => {
  const [ data ] = useState([  
    {
      id: 1,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Iphone",
      description: "Iphone",
      price: 5000
    },
    {
      id: 2,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Galaxy",
      description: "Galaxy",
      price: 2999
    },
    {
      id: 3,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Xiomi",
      description: "Xiomi",
      price: 2750
    },
    {
      id: 4,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Motorola",
      description: "Motorola",
      price: 4200
    },
    {
      id: 5,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Iphone",
      description: "Iphone",
      price: 5000
    },
    {
      id: 6,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Galaxy",
      description: "Galaxy",
      price: 2999
    },
    {
      id: 7,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Xiomi",
      description: "Xiomi",
      price: 2750
    },
    {
      id: 8,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Motorola",
      description: "Motorola",
      price: 4200
    },
    {
      id: 9,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Xiomi",
      description: "Xiomi",
      price: 2750
    },
    {
      id: 10,
      photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",  
      name: "Motorola",
      description: "Motorola",
      price: 4200
    }
  ]);

  const [ cart, setCart ] = useState([] as any);
  
  const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  return(
    <Container>
      <div className="nav">
        <div>
          <img src={Icon} alt="Icon" width="100px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;