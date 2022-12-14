import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
// import { handleShow } from "../../Gobal/CardModal";
const ProductCard = ({ p }) => {
  return (
    <div>
      <Card className="mt-4 ">
        <Card.Img variant="top" src={p.image} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Usages: {p.usagesTime}</ListGroup.Item>
          <ListGroup.Item>Asking Price: {p.amount} BDT</ListGroup.Item>
          <ListGroup.Item>Market Price: {p.originalPrice}BDT</ListGroup.Item>
          <ListGroup.Item>Sell by: {p?.sellerName}</ListGroup.Item>
        </ListGroup>

        <Card.Footer className="text-center " >
          {/* <Button className="text-end">Book Now</Button> */}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
