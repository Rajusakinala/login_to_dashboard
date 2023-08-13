import { Button, Snackbar } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from "@mui/material/Alert";
import Navbar from "./Navbar";

const Dashborad = ({ setIsLoggedIn, loggedDetails }) => {
  const [snakbarOpen, setSnakbarOpen] = React.useState(true);
  const [logOutDiaBoxOpen, setLogOutDiaBoxOpen] = React.useState(false);

  return (
    <div>
      <div>Dash board page</div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div>Homepage goes here</div>
      <div>{loggedDetails?.name}</div>
      <div>
        {/* <Button  onClick={() => setLogOutDiaBoxOpen(true)}>
          Log out
        </Button> */}
      </div>
    </div>
  );
};

export default Dashborad;
