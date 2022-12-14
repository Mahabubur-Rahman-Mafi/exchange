import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Admin = () => {
  const { user } = useContext(UserAuth);
  const { data: users = [], refetch } = useQuery({
    querykey: ["users"],
    queryFn: () =>
      fetch("https://exchange-server.vercel.app/users").then((res) =>
        res.json()
      ),
  });

  // handleVerify
  const handleVerify = (id) => {
    const verify = {
      text: "verified",
    };
    fetch(`https://exchange-server.vercel.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(verify),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Verified");
        refetch();
      });
  };
  // handleadmin
  const handleAdmin = (id) => {
    const makeAdmin = {
      text: "admin",
    };
    fetch(`https://exchange-server.vercel.app/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makeAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New Admin Assign");
        refetch();
      });
  };

  // remove user
  const handleDelete = (id) => {
    fetch(`https://exchange-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Removed");
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
        <title> Admin Dashboard | ex-change</title>
      </Helmet>
      <div>
        <h3 className="text-center mt-5 mb-4`">
          Greeting Admin {user?.displayName}
        </h3>
        <div className="text-center my-4 fs-4 fw-semibold">
          <Link to="/seller">
            {" "}
            <Button className="w-25 me-3" variant="outline-success">
              View as Seller
            </Button>
          </Link>
          <Link to="/buyer">
            {" "}
            <Button className="w-25" variant="success">
              View as Buyer
            </Button>
          </Link>
          <Link to="/products">
            {" "}
            <Button className="w-25" variant="outline-success">
              View all products
            </Button>
          </Link>
        </div>
        <Table striped bordered hover size="sm" className="text-center mt-4">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>

          {users.map((us, i) => (
            <tbody key={us._id}>
              {" "}
              <tr>
                <td>{i + 1}</td>
                <td>{us.name}</td>
                <td>{us.role}</td>

                <td>
                  {!us?.status && (
                    <Button
                      variant="outline-success"
                      onClick={() => handleVerify(us._id)}
                    >
                      Verify User
                    </Button>
                  )}
                </td>
                <td>
                  {us?.role !== "admin" && (
                    <Button
                      variant="outline-dark"
                      onClick={() => handleAdmin(us._id)}
                    >
                      Make Admin
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(us._id)}
                  >
                    Remove User
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Admin;
