import { Button, Snackbar } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from "@mui/material/Alert";

const Dashborad = ({ setIsLoggedIn, loggedDetails }) => {
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
      <div>Dash board page</div>
      <div>{loggedDetails?.name}</div>
      <div>
        <Button variant="outlined" onClick={() => setLogOutDiaBoxOpen(true)}>
          Log out
        </Button>
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
          autoHideDuration={5000}
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
    </div>
  );
};

export default Dashborad;
