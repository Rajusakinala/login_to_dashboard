import { Button } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const Dashborad = ({ setisLoggedIn }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div>Dash board page</div>
      <div>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Log out
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Are you sure to LOGOUT..?
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setisLoggedIn(false)}>Yes</Button>
            <Button onClick={() => setOpen(false)} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashborad;
