 
import {
    BrandItem,
    BrandImage,
    BrandName,
    BrandListContainer
} from './Brand.syles'

  const brands = [
    {
      id: 1,
      name: 'Roja',
      imageUrl: 'https://jovoygcc.com/wp-content/uploads/2024/06/ROJA-logo.jpg',
      URL:'/shop/roja',
    },
    {
      id: 2,
      name: 'Bond No 9',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtp9l7QP343xdD2KAGErktqRMHvEwKALdaXw&s',
      URL:'/shop/bond',
    },
    {
      id: 3,
      name: 'Creed',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfN9YZ2Fw9n2wU9u6t8u29Fyn-vjfd-_UOKQ&s',
      URL:'/shop/creed',
    },
    {
      id: 4,
      name: 'Kilian',
      imageUrl: 'https://media.elcompanies.com/images/e/estee-lauder-companies/universal/our-brands/kilian/kilian%20paris%20logo_black_540x260px.png?h=260&iar=0&w=540',
      URL:'/shop/kilian',
    },
    {
      id: 5,
      name: 'Xerjoff',
      imageUrl:'https://mdpindia.com/cdn/shop/collections/3861a6bdb486c9b4830aa20da895ebd9.png?v=1617698439',
      URL:'shop/xerjoff',
    },
  ];
  
  const Brand = () => {
    return (
      <BrandListContainer>
        {brands.map((brand) => (
          <BrandItem key={brand.id}>
            <a href={brand.URL}>
            <BrandImage src={brand.imageUrl} alt={brand.name}/>
            </a>
            <BrandName>{brand.name}</BrandName>
          </BrandItem>
        ))}
      </BrandListContainer>
    );
  };
  
  export default Brand;
  