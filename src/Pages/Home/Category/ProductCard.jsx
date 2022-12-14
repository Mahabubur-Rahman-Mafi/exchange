import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { UserAuth } from "../../../Auth/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Spinner from "../../../Global/Spinner";
import { format } from "date-fns";
import useSeller from "../../../Hooks/useSeller";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ p }) => {
  const { register, handleSubmit, required, reset } = useForm();

  const { user, loader } = useContext(UserAuth);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSeller] = useSeller(user?.email);
  const [us, setUs] = useState([]);
  useEffect(() => {
    fetch("https://exchange-server.vercel.app/users")
      .then((res) => res.json())
      .then((d) => setUs(d));
  }, []);
  if (loader) {
    return <Spinner></Spinner>;
  }

  // form submit
  const onSubmit = (data) => {
    handleClose();
    fetch("https://exchange-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order Added");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Order Failed");
      });
  };

  const handleButton = (e) => {
    handleShow();
    if (e === p._id) {
      setClicked(p);
    }
  };
  return (
    <div>
      <Card className="mt-4 ">
        <Card.Img variant="top" src={p.image} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          {/* <Card.Text>{p}</Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Usages: {p.usagesTime}</ListGroup.Item>
          <ListGroup.Item>Asking Price: {p.amount} BDT</ListGroup.Item>
          <ListGroup.Item>Market Price: {p.originalPrice}BDT</ListGroup.Item>
          <ListGroup.Item>
            <>Sell by: {p?.sellerName}</>
            <>
              {" "}
              {us.map((u) =>
                !u.status === "verified" ? (
                  <FaCheck className="text-primary"></FaCheck>
                ) : (
                  ""
                )
              )}
            </>
          </ListGroup.Item>
          <ListGroup.Item>Date: {p?.date}</ListGroup.Item>
        </ListGroup>

        <Card.Footer className="text-center">
          <Button
            className="text-end"
            onClick={() => handleButton(p._id)}
            disabled={isSeller}
          >
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
            <Form.Control
              type="text"
              {...register("date", { required: true })}
              readOnly
              defaultValue={format(new Date(), "PP")}
              className="mb-2"
            />
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
              type="number"
              placeholder="Enter your phone number"
              {...register("buyerPhone", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Meeting Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your location"
              {...register("buyerLocation", { required: true })}
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
