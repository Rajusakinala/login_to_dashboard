import { Grid, Snackbar } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from "@mui/material/Alert";

const Navbar = ({ setIsLoggedIn }) => {
  const [snakbarOpen, setSnakbarOpen] = React.useState(true);
  const [logOutDiaBoxOpen, setLogOutDiaBoxOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnakbarOpen(false);
  };

  return (
    <div>
      {/* <div></div> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              //   size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              Menu 01
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu 02
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              Menu 03
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 12 }}
            ></Typography>
            <Button
              variant="outlined"
              // color="inherit"
              color="secondary"
              sx={{ color: "white" }}
              onClick={() => setLogOutDiaBoxOpen(true)}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Dialog
          open={logOutDiaBoxOpen}
          onClose={() => setLogOutDiaBoxOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Are you sure to LOGOUT..?
          </DialogTitle>
          <DialogActions>
            <Button
              variant="contained"
              onClick={() => setLogOutDiaBoxOpen(false)}
              autoFocus
            >
              No
            </Button>
            <Button variant="outlined" onClick={() => setIsLoggedIn(false)}>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Snackbar
          open={snakbarOpen}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            // onClose={() => setSnakbarOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your successfully logged IN
          </Alert>
        </Snackbar>
      </div>

      {/* <Grid container spacing={1}>
        <Grid item>option 1</Grid>
        <Grid item>option 2</Grid>
        <Grid item>option 3</Grid>
        <Grid item>option 4</Grid>
      </Grid> */}
    </div>
  );
};

export default Navbar;
