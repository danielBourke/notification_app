import React, {  useRef, useEffect } from "react";
import Topbar from "../../../Components/Topbar";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import ShareBox from "./ShareBox";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { ACCEPT } from "../../../app/redux/constants";
import { REJECT } from "../../../app/redux/constants/index";

const Dashboard = () => {
  const socket = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    socket.current = io("http://localhost:3001");
    socket.current.on("message", (message) => {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.emoji === 1) {
        dispatch({ type: ACCEPT, payload: parsedMessage });
      } else {
        dispatch({ type: REJECT, payload: parsedMessage });
      }
    });
  }, [dispatch]);

  return (
    <>
      <Topbar />

      <div
        style={{
          display: "flex",
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 120,
          padding: 20,
        }}
      >
        <ActivityFeed />
        <ShareBox />
      </div>
    </>
  );
};

export default Dashboard;
