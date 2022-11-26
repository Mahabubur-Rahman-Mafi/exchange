import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {  Container } from "react-bootstrap";
import ProductCard from './ProductCard';
import "../Home.css";


const CateProduct = () => {
    const products = useLoaderData();
  

    return (
      <Container className='mb-4'>
        <h6 className="text-center text-info">
          {
            <>
              {products?.length}
              {products?.length <= 1 ? " item found" : " items found"}
            </>
          }
        </h6>
        <div className="product-card">
          {products.map((product) => (
            <ProductCard p={product} key={product._id}></ProductCard>
          ))}
        </div>
      </Container>
    );
};

export default CateProduct;