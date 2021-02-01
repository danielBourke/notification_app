import React from "react";
import ActivityItem from "./ActivityItem";
import TotalRewards from "./TotalRewards";
import ShareLink from "../ShareLink/index";
import { Typography } from "@material-ui/core";
import {
  withStyles,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: "#ededed",
      color: "#3d3d3d",
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ActivityFeed = () => {
  const classes = useStyles();
  const { notifications } = useSelector((state) => state.rewards);
  return (
    <div
      style={{
        display: "flex",
        paddingRight: 10,
        flexGrow: 2,
        flexDirection: "column",
      }}
    >
      <ShareLink />
      <Typography variant="h4" gutterBottom>
        Wellcome back, you've referred friends! Keep coming for more rewards
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                {" "}
                <Typography variant="h4" gutterBottom>
                  Activity Feed
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
              
              </StyledTableCell>
           
            </TableRow>
          </TableHead>
       
        <TableBody>
          {notifications.map((notification, i) => (
            <StyledTableRow key={i}>
              <ActivityItem notification={notification} />
            </StyledTableRow>
          ))}

          <TableRow>
            <TotalRewards />
          </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ActivityFeed;
