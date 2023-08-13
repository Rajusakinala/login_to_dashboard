import { Button, Grid, Input, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = ({ setIsLoggedIn, setLoggedDetails }) => {
  const [formData, setFormData] = useState({});
  const dataBase = [
    { name: "Raju", email: "raju@gmail.com", password: "raju" },
    { name: "Siri", email: "siri@gmail.com", password: "siri123" },
  ];

  const loginHandler = (obj) => {
    const returnedObj = dataBase.find((person) => person.email === obj?.email);
    if (returnedObj) {
      console.log("email exist");
      if (obj.password === returnedObj.password) {
        console.log("Password MATCHED");
        setIsLoggedIn(true);
        const ObjWithoutPassword = {};
        Object.assign(ObjWithoutPassword, returnedObj);
        delete ObjWithoutPassword.password;

        setLoggedDetails(ObjWithoutPassword);
      } else {
        console.log("Password not MATCHED");
      }
    } else {
      console.log("email not exist");
    }
  };
  return (
    <div>
      <div>Login page</div>

      <Grid
        container
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Grid item>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              formData[e.target.id] = e.target.value;
              setFormData(formData);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              formData[e.target.id] = e.target.value;
              setFormData(formData);
            }}
          />
        </Grid>

        <Grid item justifyContent={"start"}>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={() => {
              loginHandler(formData);
            }}
          >
            login
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={() => {
              //   signUpHandler();
            }}
          >
            Sign UP
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
