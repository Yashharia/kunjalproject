import { Routes, Route } from 'react-router-dom';


import CategoriesPreview from '../categoires-preview/categoires-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;