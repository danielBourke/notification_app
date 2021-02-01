import React from "react";
import { useSelector } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: "#ededed",
      color: "#3d3d3d",
    },
    body: {
      fontSize: 14,
      width: "100%",
      flexGrow: 1,
    },
  })
)(TableCell);

const TotalRewards = () => {
  const { count } = useSelector((state) => state.rewards);
  return (
    <>
      <StyledTableCell >
        <Typography variant="h4" gutterBottom>
          Total rewards
        </Typography>{" "}
      </StyledTableCell>

      <StyledTableCell >
        <Typography style={{ marginLeft: "auto" }} variant="h4" gutterBottom>
          {count}{" "}
        </Typography>
      </StyledTableCell>
    </>
  );
};

export default TotalRewards;
