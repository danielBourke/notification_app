import React, { useRef, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { ACCEPT, REJECT } from "../../../app/redux/constants";
import io from "socket.io-client";
import Typography from "@material-ui/core/Typography";


const FriendPage = () => {
  const dispatch = useDispatch();
  const [submited, setSubmitted] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:3001");
  }, []);
  const handleAccept = () => {
    const msg = {
      msg: "Dave has accepted your request!",
      emoji: 1,
    };

    socket.current.emit("message", JSON.stringify(msg));
    setSubmitted(true);
    dispatch({ type: ACCEPT, payload: msg, reward: 5 });
  };

  const handleReject = () => {
    const msg = {
      msg: "Dave has rejected your request!",
      emoji: 2,
    };
    socket.current.emit("message", JSON.stringify(msg));
    setSubmitted(true);
    dispatch({ type: REJECT, payload: msg });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ margin: "auto" }}>
        {submited ? (
          <Typography variant="h2" gutterBottom>
            Thank you!
          </Typography>
        ) : (
          <>
            {" "}
            <Button
              onClick={() => handleReject()}
              style={{ marginRight: 20 }}
              variant="contained"
              color="secondary"
            >
              reject
            </Button>
            <Button
              onClick={() => handleAccept()}
              style={{ marginLeft: 20 }}
              variant="contained"
              color="primary"
            >
              accept
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
