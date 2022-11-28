import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { UserAuth } from "../Auth/AuthContext";
import { Helmet } from "react-helmet";
const AdProducts = () => {
  const { user } = useContext(UserAuth);
  const [isAdmin] = useAdmin(user?.email);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://exchange-server.vercel.app/products`).then((res) => {
        return res.json();
      }),
  });
  refetch();
  // update advertise
  const handleAdvertise = (id) => {
    const update = {
      text: "advertised",
    };
    fetch(`https://exchange-server.vercel.app/products/${id}`, {
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
  refetch();

  // delete product
  const handleDelete = (id) => {
    fetch(`https://exchange-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product removed");
        refetch();
      })
      .catch((e) => {
        toast.error("Failed");
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All products | ex-change</title>
      </Helmet>
      <Container>
        <h4 className="text-center">Welcome Back {user?.displayName}</h4>
        <p className="text-center">
          {
            <>
              {products?.length}
              {products?.length <= 1
                ? " product in your Database"
                : " products in your Database"}
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
    </>
  );
};

export default AdProducts;
