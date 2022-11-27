import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { UserAuth } from "../../../Auth/AuthContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import Upload from "./Upload";


const Seller = () => {
  const { user } = useContext(UserAuth);
  const [upload, setUpload] = useState(false)
  const [btn, setBtn] = useState(false)
  
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${user?.email}`).
        then((res) => {
          return res.json()
        }

      ),
  });
if (upload) {
  refetch();
}
  // update advertise
  const handleAdvertise = (id) => {
    console.log(id);
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
        console.log(data);
        toast.success("Advertise Started");
        setBtn(true)
      });
  };

  // delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product removed");
        refetch()
      })
      .catch((e) => {
        console.log(e);
        toast.error("Failed");
      });
  }
  refetch();
  return (
    <div>
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
                  {!order?.advertise &&
                    <Button Button
                    variant="outline-success"
                    onClick={() => handleAdvertise(order._id)}
                  >
                    Advertised
                  </Button>}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
      <Upload setUpload={setUpload}></Upload>
    </div>
  );
};

export default Seller;
