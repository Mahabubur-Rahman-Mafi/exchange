import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const ProductCard = ({ p }) => {

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
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
          <Button className="text-end" onClick={handleShow}>
            Book Now
          </Button>
        </Card.Footer>
      </Card>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Set a meeting</Modal.Title>
        </Modal.Header>
        <Form className="p-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"  readOnly/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
      {/* ---- */}
    </div>
  );
};

export default ProductCard;
