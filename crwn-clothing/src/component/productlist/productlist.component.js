import React, { useState } from 'react';
import RatingFilter from './RatingFilter';
import ProductCard from './ProductCard'; // Your card UI component

const ProductList = ({ products }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredProducts = products.filter((product) => {
    return selectedRating === 0 || product.rating >= selectedRating;
  });

  return (
    <div>
      <RatingFilter selectedRating={selectedRating} onSelect={setSelectedRating} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
