import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Admin = () => {
  const { user } = useContext(UserAuth);
  const { data: users = [], refetch } = useQuery({
    querykey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  // handleVerify
  const handleVerify = (id) => {
    const verify = {
      text: "verified",
    };
    fetch(`http://localhost:5000/users/${id}`, {
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
    fetch(`http://localhost:5000/users/${id}`, {
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
    fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
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
    <div>
      <h3 className="text-center mt-5 mb-4`">
        Greeting Admin {user?.displayName}
      </h3>
      <Table striped bordered hover className="text-center mt-4 w-100">
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
      </div>
    </div>
  );
};

export default Admin;
