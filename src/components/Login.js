import { Button, Grid, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";

const Login = ({ setIsLoggedIn, setLoggedDetails }) => {
  const [formData, setFormData] = useState({});
  const [snakbarOpen, setSnakbarOpen] = React.useState(false);
  const [snakbarObj, setSnakbarObj] = React.useState({
    msg: "",
    severity: "error",
  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const dataBase = [
    { name: "Raju", email: "raju@gmail.com", password: "raju" },
    { name: "Siri", email: "siri@gmail.com", password: "siri123" },
  ];

  const loginHandler = (obj) => {
    const returnedObj = dataBase.find((person) => person.email === obj?.email);
    if (returnedObj) {
      console.log("email exist");
      if (obj.password === returnedObj.password) {
        setIsLoggedIn(true);
        const ObjWithoutPassword = {};
        Object.assign(ObjWithoutPassword, returnedObj);
        delete ObjWithoutPassword.password;
        setLoggedDetails(ObjWithoutPassword);
      } else {
        setSnakbarOpen(true);
        setSnakbarObj({
          msg: "email exist, But Password not MATCHED",
          severity: "info",
        });
      }
    } else {
      setSnakbarOpen(true);
      setSnakbarObj({ msg: "email not exist", severity: "error" });
    }
  };
  return (
    <div>
      <div>Sign In page</div>

      <Snackbar
        open={snakbarOpen}
        autoHideDuration={5000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setSnakbarOpen(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnakbarOpen(false)}
          severity={snakbarObj?.severity}
          sx={{ width: "100%" }}
        >
          {snakbarObj?.msg}
        </Alert>
      </Snackbar>

      <Grid
        container
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Grid item>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            // helperText="email is required filed"
            onChange={(e) => {
              formData[e.target.id] = e.target.value;
              setFormData(formData);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            // helperText="password is required filed"
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
            Sign IN
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={() => {
              //   signUpHandler();
              setSnakbarOpen(true);
              setSnakbarObj({
                msg: "Sign up feature in Progress",
                severity: "success",
              });
            }}
          >
            Sign UP
          </Button>
        </Grid>

        <Grid item justifyContent={"start"}>
          <Button
            sx={{ m: 1 }}
            onClick={() => {
              //   forgotPasswordHandler();
              setSnakbarOpen(true);
              setSnakbarObj({
                msg: "Forgot password feature in Progress",
                severity: "success",
              });
            }}
          >
            forget Password
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
