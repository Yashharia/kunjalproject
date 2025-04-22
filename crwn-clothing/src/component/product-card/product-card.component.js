import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.css';
import {Link } from 'react-router-dom';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, rating, mrp, label, category } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);


  const getPriceRating = (price) => {
    if (price < 3000) return 1;
    if (price < 7000) return 2;
    if (price < 12000) return 3;
    if (price < 20000) return 4;
    return 5;
  };

  
  return (
    <div className="product-card-horizontal">
       <Link to={`/product/${category}/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={imageUrl} alt={name} className="product-image" />
      </Link>
      <div className="product-details">
        <span className="product-name">{name}</span>
        
        <div className="rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
        <div className="price-section">
          ${price}
          <span className="mrp">{mrp}</span>
        </div>
        {label && <span className="label-tag">{label}</span>}
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
