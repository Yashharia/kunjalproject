import {
    SaleContainer,
    SaleTitle,
    SaleDescription,
    SaleGrid,
  } from './sale.styles';
  
  import ProductCard from '../../component/product-card/product-card.component';
  import { SaleBanner } from './sale.styles';

  const saleItems = [
    {
      id: 1,
      name: 'Collection Heritage',
      imageUrl: 'https://rojadoveperfumery.com/cdn/shop/collections/HERITAGE.png?v=1652042163',
      price: "78900",
      rating: '4',
    },
    {
      id: 2,
      name: 'Luxurious',
      imageUrl: 'https://www.4doutfitters.com/cdn/shop/articles/Xerjoff-Purple-Accento_TrisIG_1.jpg?v=1710166229&width=2500',
      price: "85000",
      rating: '5',
    },
    {
      id: 3,
      name: 'Centaurus',
      imageUrl: 'https://kaneen.com/media/catalog/product//C/e/Centaurus-Perfume-by-Creed-Eau-de-Parfum-For-Unisex-100-ml-3-16efcad9.webp',
      price: '4000',
      rating: '3',
    }
  ];
  
  const Sale = () => {
    return (
      <SaleBanner>
      <p>🔥 This product is on sale! Limited time only. 🔥</p>
      <SaleContainer>
        <SaleTitle>Big Sale on Fragrances!</SaleTitle>
        <SaleDescription>Enjoy limited-time discounts on your favorite perfumes.</SaleDescription>
  
        <SaleGrid>
          {saleItems.map((product) => (
            <ProductCard product={product}/>
          ))}
        </SaleGrid>
      </SaleContainer>
      </SaleBanner>
    );
  };
  
  export default Sale;
  