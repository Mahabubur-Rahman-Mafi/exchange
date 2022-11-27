import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { UserAuth } from "../../../Auth/AuthContext";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import Upload from "./Upload";
import useAdmin from "../../../Hooks/useAdmin";
import { Link } from "react-router-dom";

const Seller = () => {
  const { user } = useContext(UserAuth);
  const [upload, setUpload] = useState(false);
  const [isAdmin] = useAdmin(user?.email);

  const {
    data: products = [],
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${user?.email}`).then((res) => {
        return res.json();
      }),
  });
  if (upload) {
    refetch();
  }
  // update advertise
  const handleAdvertise = (id) => {
    const update = {
      text: "advertised",
    };
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Advertise Started");
      });
  };

  // delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product removed");
        refetch();
      })
      .catch((e) => {
        toast.error("Failed");
      });
  };
  refetch();
  return (
    <Container>
      <h4 className="text-center">Welcome Back {user?.displayName}</h4>
      <p className="text-center">
        {
          <>
            {products?.length}
            {products?.length <= 1
              ? " product you want to sell"
              : " products you want to sell"}
          </>
        }
      </p>
      {products?.length >= 1 && (
        <Table striped bordered hover className="text-center mt-4">
          <thead>
            <tr>
              <th>Serial</th>
              <th>ItemName</th>
              <th>Price</th>
              <th>Upload Date</th>
              <th>Status</th>
              <th>Do</th>
            </tr>
          </thead>

          {products.map((order, i) => (
            <tbody key={order._id}>
              {" "}
              <tr>
                <td>{i + 1}</td>
                <td>{order.title}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete Product
                  </Button>
                </td>
                <td>
                  {!order?.advertise && (
                    <Button
                      Button
                      variant="outline-success"
                      onClick={() => handleAdvertise(order._id)}
                    >
                      Advertised
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
      <Upload setUpload={setUpload}></Upload>
      <div className="text-center fs-4 fw-semibold">
        {isAdmin && (
          <>
            <Link to="/dashboard">
              <Button className="w-25 my-5 me-4" variant="outline-dark">
                Go to DashBoard
              </Button>
            </Link>
            <Link to="/buyer">
              <Button className="w-25 my-5" variant="dark">
                View as Buyer
              </Button>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Seller;
