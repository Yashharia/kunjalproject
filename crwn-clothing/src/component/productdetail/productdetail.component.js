import { useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/categories.context";
import { useContext, useEffect, useState } from "react";

const ProductDetail = () => {
  const { cat, name } = useParams(); // Extract category and name from URL
  const { categoriesMap } = useContext(categoriesContext);
  const [product, setProduct] = useState();
console.log(cat,name)
  useEffect(() => {
    console.log(categoriesMap, 'abv use effect')
console.log(Object.keys(categoriesMap).length !== 0);
    if(Object.keys(categoriesMap).length !== 0){

    console.log(categoriesMap[cat], 'insieddosiejdsefijewfoewfjiewfoweifjswoefj')
    const product = categoriesMap[cat].find(
      (item) => item.name.trim().toLowerCase() === name.trim().toLowerCase()
  );
  
    console.log(product, "got the prdosfdsjfslfjsflj")
    setProduct(product)
  }

    console.log(categoriesMap[cat])
  }, [cat,categoriesMap]);

  const { imageUrl, price, desc } = product || {};

  return (
    product ? (
      <div className="product-detail-container">
        <h2>{name}</h2>
        <img src={imageUrl} alt={product.name} />
        <div>
          <strong>Price: ${price}</strong>
        </div>
        <div>
          <h3>Description</h3>
          <p>{desc}</p>
        </div>
        {/* Add other product details or actions as needed */}
      </div>
    ) : (
      <div>Product not found</div> // In case `product` is not available
    )
  );
  
  
};

export default ProductDetail;
