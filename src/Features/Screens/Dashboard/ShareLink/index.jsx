import React, {  useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { v4 as uuidv4 } from "uuid";
const ShareLink = () => {
  const [link] = useState(`http://localhost:3000/friendpage/${uuidv4()}`);
  const [copySuccess, setCopySuccess] = useState(false);
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(link);

      setCopySuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Your unique sharing link{" "}
      </Typography>

      <div style={{ display: "flex", backgroundColor: "#ededed", padding: 10 }}>
        <TextField fullWidth value={link} variant="outlined" />
        {copySuccess ? (
          <Tooltip title="copied to clipboard">
            <IconButton onClick={() => setCopySuccess(false)}>
              <FileCopyOutlinedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="copy">
            <IconButton onClick={() => copyToClipboard()}>
              <FileCopyOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default ShareLink;
