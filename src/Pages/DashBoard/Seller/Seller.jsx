import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserAuth } from "../../../Auth/AuthContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import Upload from "./Upload";


const Seller = () => {
  const { user } = useContext(UserAuth);

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
  refetch();
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
  refetch();return (
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
              <th>Booking Date</th>
              <th>Status</th>
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
                    onClick={()=>handleDelete(order._id)}
                  >
                   Delete Product
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
      <Upload></Upload>
    </div>
  );
};

export default Seller;
