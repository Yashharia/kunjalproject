import { useContext, Fragment } from "react";

import { categoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../component/catergory-preview/catergoy-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  console.log(categoriesMap["roja"], "check check ------------------");
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
