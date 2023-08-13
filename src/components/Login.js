import { Button } from "@mui/material";
import React from "react";

const Login = ({ setisLoggedIn }) => {
  return (
    <div>
      <div>Login page</div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setisLoggedIn(true);
          }}
        >
          login
        </Button>
      </div>
    </div>
  );
};

export default Login;
