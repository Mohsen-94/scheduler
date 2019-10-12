import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(2)
  }
}));

export default props => {
  const classes = useStyles();
  const initialState = {
    Name: "",
    Sunday: "",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: ""
  };

  const [state, setState] = useState(initialState);
  const { addedCourses, setAddedCourses } = props;

  function handleAdd() {
    if (isInputNotEmpty(state)) {
      setAddedCourses([...addedCourses, state]);
      setState({ ...initialState, Name: state["Name"] });
    }
  }

  return (
    <Paper className={classes.paper}>
      <form
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        {Object.keys(initialState).map((lable, i) => (
          <TextField
            onChange={e => setState({ ...state, [lable]: e.target.value })}
            label={lable}
            className={classes.textField}
            margin="dense"
            variant="outlined"
            key={i}
            value={state[lable]}
          />
        ))}
      </form>
      <Fab
        className={classes.margin}
        size="small"
        color="secondary"
        onClick={handleAdd}
      >
        <i className="material-icons">add</i>
      </Fab>
    </Paper>
  );
};

function isInputNotEmpty(fields) {
  for (const key in fields) {
    if (fields[key].length > 0) return true;
  }
  return false;
}
