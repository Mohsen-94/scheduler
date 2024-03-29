import React, { useState } from "react";
import { to2D } from "../util";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    maxWidth: 1000
  },
  table: {
    minWidth: 650
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    display: "block",
    width: "33%",
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5)
  }
}));

export default function TableDisplay({ schedules, tableRef }) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  let arr;
  if (index >= schedules.length) {
    setIndex(index - 1);
    arr = to2D(schedules[index - 1]);
  } else {
    arr = to2D(schedules[index]);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={12}>
              <Container className={classes.flex}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  disabled={index === 0}
                  onClick={e => {
                    setIndex(index - 1);
                  }}
                >
                  Previous
                </Button>
                <Chip
                  variant="outlined"
                  color="secondary"
                  label={`${index + 1} out of ${schedules.length}`}
                />
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  disabled={index === schedules.length - 1}
                  onClick={e => {
                    setIndex(index + 1);
                  }}
                >
                  Next
                </Button>
              </Container>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Sunday</TableCell>
            <TableCell align="center">Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednesday</TableCell>
            <TableCell align="center">Thursday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row, i) => (
            <TableRow key={i}>
              {(i < 6 && <TableCell>{i + 7}:00 AM</TableCell>) || (
                <TableCell>{i + 7 - 12}:00 PM</TableCell>
              )}
              {row.map((cell, i) => (
                <TableCell
                  key={i}
                  align="center"
                  style={{ backgroundColor: cell.color }}
                >
                  {cell.name}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
