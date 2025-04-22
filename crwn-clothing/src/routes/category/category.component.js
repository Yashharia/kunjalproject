import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../component/product-card/product-card.component';
import './category.style.css';
import { categoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(categoriesContext);

  console.log(categoriesMap, 'check categories mapp')
  
  // Set initial state for products
  const [products, setProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  // Effect to update products based on category change
  useEffect(() => {
      setProducts(categoriesMap[category]);
      console.log(categoriesMap[category],' ===================')
  }, [category, categoriesMap]);


  const handleRatingChange = (e) => {
    setSelectedRating(Number(e.target.value));
  };

  // Filtered products based on rating
  const filteredProducts = products?.filter((product) =>
    selectedRating === 0 ? true : product.rating >= selectedRating
  );

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>

      <div className="rating-filter">
        <label>Filter by Rating: </label>
        <select value={selectedRating} onChange={handleRatingChange}>
          <option value={0}>All Ratings</option>
          <option value={5}>5 stars</option>
          <option value={4}>4 stars & up</option>
          <option value={3}>3 stars & up</option>
        </select>
      </div>

      {products?.desc && <div className='desc-container'>{products.desc}</div>}
      <CategoryContainer className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;