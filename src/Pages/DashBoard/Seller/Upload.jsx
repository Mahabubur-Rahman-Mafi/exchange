import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Form, ModalBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../../Auth/AuthContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Upload = ({ setUpload }) => {
  const { user } = useContext(UserAuth);
  const [show, setShow] = useState(false);
  const [cat, setCat] = useState([]);
  const { register, handleSubmit, required, reset } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   category upload
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((d) => setCat(d));
  }, [user]);
console.log(cat);
  // form submit
  const onSubmit = (d) => {
    handleClose();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUpload(true);
        toast.success("Product Added");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to add");
      });

  };
  return (
    <>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Add your products
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                {...register("date", { required: true })}
                readOnly
                defaultValue={format(new Date(), "PP")}
                className="mb-2"
              />
              <Form.Control
                type="text"
                {...register("email", { required: true })}
                readOnly
                defaultValue={user?.email}
                className="mb-2"
              />
              <Form.Control
                type="text"
                {...register("sellerName", { required: true })}
                readOnly
                defaultValue={user?.displayName}
                className="mb-2"
              />
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your product name"
                {...register("title", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your product price"
                {...register("amount", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                {...register("sellerPhone", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                {...register("location", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                {...register("des", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usages Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                {...register("usagesTime", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image Url"
                {...register("image", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Current Market Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Market Price"
                {...register("originalPrice", { required: true })}
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingSelect"
              label="Set your category"
              className="fs-6 fw-semibold mt-4"
            >
              <Form.Select
                aria-label="Floating label select example"
                className="fs-5"
                {...register("categoryName", { required: true })}
              >
                {cat?.map((c) => (
                  <option value={c.categoryName}>{c.categoryName}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelect"
              label="Condition type"
              className="fs-6 fw-semibold mt-4"
            >
              <Form.Select
                aria-label="Floating label select example"
                className="fs-5"
                {...register("type", { required: true })}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </Form.Select>
            </FloatingLabel>
          </ModalBody>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Upload;
