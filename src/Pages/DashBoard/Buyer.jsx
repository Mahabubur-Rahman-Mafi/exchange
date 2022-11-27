import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import Spinner from "../../Global/Spinner";
import BuyerCard from "./Buyer/BuyerCard";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";

const Buyer = () => {
  const { user, loader } = useContext(UserAuth);
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`http://localhost:5000/orders/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking Cancel");
        refetch();
      })
      .catch((e) => {
        console.log(e);
        toast.error("Failed");
      });
  };
  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Welcome to {user?.displayName} </h2>
      <p className="text-center">
        {
          <>
            {orders?.length}
            {orders?.length >= 1
              ? " item you have ordered"
              : " items you have ordered"}
          </>
        }
      </p>
      <Table striped bordered hover className="text-center mt-4">
        <thead>
          <tr>
            <th>Serial</th>
            <th>ItemName</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        {orders.map((order, i) => (
          <tbody key={order._id}>
            {" "}
            <tr>
              <td>{i + 1}</td>
              <td>{order.itemName}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(order._id)}
                >
                  Cancel Order
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Buyer;
