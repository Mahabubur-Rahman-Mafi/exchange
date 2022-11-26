import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { UserAuth } from "../../Auth/AuthContext";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useSeller";
import Admin from "./Admin";
import Buyer from "./Buyer";
import Seller from "./Seller";

const Dash = () => {
  const { user } = useContext(UserAuth);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <Container>
      {isAdmin && <Admin></Admin>}
      {isSeller && <Seller></Seller>}
      {isBuyer && <Buyer></Buyer>}
      {!isAdmin && !isSeller && !isBuyer && <Buyer></Buyer>}
    </Container>
  );
};

export default Dash;
