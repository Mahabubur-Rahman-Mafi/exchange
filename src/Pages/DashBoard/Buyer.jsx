import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import Spinner from "../../Global/Spinner";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";
import { Link } from "react-router-dom";

const Buyer = () => {
  const { user, } = useContext(UserAuth);
  const [isAdmin] = useAdmin(user?.email)
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
  //
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
    <Container>
      <h2 className="text-center mt-4 mb-3">Welcome to {user?.displayName} </h2>
      <p className="text-center">
        {
          <>
            {orders?.length}
            {orders?.length <= 1
              ? " item you have ordered"
              : " items you have ordered"}
          </>
        }
      </p>
      {orders?.length >= 1 && (
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
      )}
      <div className="text-center fs-4 fw-semibold">
        {isAdmin && (
          <>
            <Link to="/dashboard">
              <Button className="w-25 my-5 me-4" variant="outline-dark">
                Go to DashBoard
              </Button>
            </Link>
            <Link to="/seller">
              <Button className="w-25 my-5" variant="dark">
                View as Seller
              </Button>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Buyer;
