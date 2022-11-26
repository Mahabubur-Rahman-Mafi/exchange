import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
const ProductCard = ({ p }) => {
  return (
    <div>
      <Card className="mt-4 ">
        <Card.Img variant="top" src={p.image} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>{p.des.split("", 25)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Usages: {p.usagesTime}</ListGroup.Item>
          <ListGroup.Item>Asking Price: {p.amount} BDT</ListGroup.Item>
          <ListGroup.Item>Market Price: {p.originalPrice}BDT</ListGroup.Item>
          <ListGroup.Item>Sell by: {p?.name}</ListGroup.Item>
        </ListGroup>

        <Card.Footer className="text-center">
          <Link to={`/category/${p._id}`}>
            <Button className="me-4" variant="outline-primary">
              View Details
            </Button>
          </Link>
          <Button className="text-end">Book Now</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
