import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import './Shared.css'


const Category = () => {
  const products = useLoaderData();
  return (
    <div>
      <h6 className="text-center text-info">
        {
          <>
            {products?.length}
            {products?.length <= 1 ? " item found" : " items found"}
          </>
        }
      </h6>
      <div className="product-card">
        {products.map((p) => (
          <ProductCard p={p} key={p._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
