import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: "#ededed",
      color: "#3d3d3d",
    },
    body: {
      fontSize: 14,
      width: 300,
      flexGrow: 1,
    },
  })
)(TableCell);

const ActivityItem = ({ notification }) => {
  const renderEmoji = () => {
    if (notification.emoji === 1) {
      return <span role="img" aria-label="" style={{ fontSize: "40px" }}>&#128515;</span>;
    }
    if (notification.emoji === 2) {
      return <span role="img" aria-label="" style={{ fontSize: "40px" }}>&#128561;</span>;
    }

    if (notification.emoji === 3) {
      return <span role="img" aria-label="" style={{ fontSize: "40px" }}>&#128563;</span>;
    }
  };
  return (
    <>
      <StyledTableCell
        align="left"
        style={{ minWidth: 800, flexGrow: 1 }}
   
      >
        <Typography style={{ marginLeft: 10 }}>
          {renderEmoji()} {notification.msg}
        </Typography>
      </StyledTableCell>
      <TableCell></TableCell>
    </>
  );
};

export default ActivityItem;
