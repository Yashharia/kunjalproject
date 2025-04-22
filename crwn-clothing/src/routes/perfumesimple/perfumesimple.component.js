import React from "react";
import ProductCard from "../../component/product-card/product-card.component";

const perfumes = [
  {
    id: 1,
    name: "Amouage - Reflection for Men",
    price: "25000",
    imageUrl: "https://www.olfactoryfactoryllc.com/cdn/shop/files/Travel_spray.jpg?v=1742551185&width=713",
    rating: '3',
  },
  {
    id: 2,
    name: "Bond No.9 - Chez Bond",
    price: "32000",
    rating:'3',
    imageUrl: "https://www.olfactoryfactoryllc.com/cdn/shop/files/Travelspray_253f29c9-c2d2-4a3d-92a9-7e55923330dc.jpg?v=1742039209&width=713",
  },
  {
    id: 3,
    name: "Creed - Aventus for Her",
    price: "18500",
    rating: '5',
    imageUrl: "https://www.olfactoryfactoryllc.com/cdn/shop/products/Sample-Creed-Aventus-for-Her-scaled.jpg?v=1739479792&width=713",
  },
  {
    id: 4,
    name: "Creed - Original Santal",
    price:"45500",
    rating:'5',
    imageUrl: "https://www.olfactoryfactoryllc.com/cdn/shop/files/Travelspray_600b6c51-ff09-41e2-b315-568a09b304fc.jpg?v=1742823450&width=713"
  },
];

const PerfumeSimple = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Perfume Store</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {perfumes.map((product) => (
         <ProductCard product={product}/>
        ))}
      </div>
    </div>
  );
};

export default PerfumeSimple;
