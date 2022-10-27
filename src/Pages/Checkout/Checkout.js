import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { selected } = useContext(AuthContext);
  return <div>{selected.displayName}</div>;
};

export default Checkout;
