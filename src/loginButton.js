import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{ width: "90%", backgroundColor: "#0dcaf0" }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
