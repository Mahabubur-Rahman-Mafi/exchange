import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { UserAuth } from "../../../Auth/AuthContext";
import { useForm } from "react-hook-form";

const ProductCard = ({ p }) => {
  const { register, handleSubmit, required } = useForm();

  const { user } = useContext(UserAuth);

  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// form submit
  const onSubmit = (d) => {
    handleClose()
    console.log(d);
  }


  const handleButton = (e) => {
    handleShow()
    if (e === p._id) {
      setClicked(p)
    }
  }
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
          <Button className="text-end" onClick={() => handleButton(p._id)}>
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
        // className="modal-dialog modal-dialog-scrollable"
      >
        <Modal.Header closeButton>
          <Modal.Title>Set a meeting</Modal.Title>
        </Modal.Header>
        <Form className="p-3" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
              readOnly
              defaultValue={user?.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name@example.com"
              {...register("userName", { required: true })}
              readOnly
              defaultValue={user?.displayName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              readOnly
              defaultValue={clicked?.title}
              {...register("itemName")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              readOnly
              defaultValue={clicked?.amount}
              {...register("price")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              {...register("sellerPhone", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Meeting Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your location"
              {...register("sellerLocation", { required: true })}
            />
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
