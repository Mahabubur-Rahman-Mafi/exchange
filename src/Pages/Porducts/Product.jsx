import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Product = () => {
    const categories = useLoaderData()
    return (
      <Container>
        <Row>
          <Col sm={12} md={3} lg={4}>
            <h3 className="">Categories</h3>
            {categories.map((category) => (
              <Link
                to={`/product/category/${category?.categoryName}`}
                key={category._id}
              >
                <Button
                  className="w-75 fs-5 fw-semibold mt-2"
                  variant="outline-dark"
                >
                  {category?.categoryName}
                </Button>
              </Link>
            ))}
          </Col>
          <Col sm={12} md={9} lg={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    );
};

export default Product;