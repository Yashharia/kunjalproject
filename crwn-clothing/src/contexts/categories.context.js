import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(()=> {
      const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};