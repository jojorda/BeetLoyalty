import React from "react";
import ProductList1 from "../../components/product/ProductList";
import Topbar from "../../components/navbar/Topbar";

const ProductList = () => {
  return (
    <div>
      <Topbar />
      <div>
        <ProductList1 />
      </div>
    </div>
  );
};

export default ProductList;
