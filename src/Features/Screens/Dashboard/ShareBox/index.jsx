import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Snackbar } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";
import { SELF_MESSAGE } from "../../../../app/redux/constants";
const ShareBox = () => {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSendInvite = (e) => {
    e.preventDefault();
    if (email === user.email) {
      const msg = {
        msg: "You tried to refer yourself! Whopps!",
        emoji: 3,
      };
      dispatch({ type: SELF_MESSAGE, payload: msg });
      setOpen(true);
      setEmail("");
    } else {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            style={{ backgroundColor: "white" }}
            variant="outlined"
            onClose={handleClose}
            severity="error"
          >
            <AlertTitle>You cannot send an invite to yourself</AlertTitle>
          </Alert>
        </Snackbar>
      )}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            style={{ backgroundColor: "white" }}
            variant="outlined"
            onClose={handleClose}
            severity="success"
          >
            <AlertTitle>Invite sent</AlertTitle>
          </Alert>
        </Snackbar>
      )}
      <div
        style={{
          backgroundColor: "#ededed",
          padding: 20,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          From {user.email}{" "}
        </Typography>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
          autoComplete="off"
          onSubmit={handleSendInvite}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              value={email}
              onChange={handleChangeEmail}
              label="Email"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: 20 }}
              onChange={handleChangeMsg}
              value={msg}
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <Button
            fullWidth
            style={{ marginTop: "auto" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send email
          </Button>
        </form>
      </div>
    </>
  );
};

export default ShareBox;
