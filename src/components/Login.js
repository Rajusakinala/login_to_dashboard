import { Button } from "@mui/material";
import React from "react";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <div>Login page</div>
      <div>
        <Button variant="contained" onClick={() => setIsLoggedIn(true)}>
          login
        </Button>
      </div>
    </div>
  );
};

export default Login;
