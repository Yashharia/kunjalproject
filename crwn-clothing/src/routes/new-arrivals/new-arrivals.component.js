import React from 'react';
import './new-arrivals.styles.css';
import Creed from '../../assets/Creed.png';
import ROJA from '../../assets/ROJA.png';
import Roja from '../../assets/roja1.png';
import MTF from '../../assets/mtf.png';
import Creed1 from '../../assets/Creed1.png';
import ProductCard from '../../component/product-card/product-card.component';
const products = [
  {
    id: 1,
    imageUrl: Creed,
    name: 'Mont Blanc Explorer Eau De Parfum For Men',
    price: '5500',
    rating: '3'
  },
  {
    id: 2,
    imageUrl: ROJA,
    name: 'Roja Dove Great Britain',
    price: '5900',
    rating: '3',
  },
  {
    id: 3,
    imageUrl: Roja,
    name: 'Sultanate of Oman Parfum',
    price: '9800',
    rating: '5',
  },
  {
    id: 4,
    imageUrl: MTF,
    name: 'Reflets d ambre',
    price: '4999',
    rating: '4'
  },
  {
    id: 5,
    imageUrl:Creed1,
    name: 'Creed - Viking Cologne',
    price: '5200',
    rating: '5',
  }
];

const NewArrivals = () => {
  return (
    <div className="new-arrivals-section">
    
      <h1>New Arrivals</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product}/>
          
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
