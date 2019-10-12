import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import MenuBookOutlined from "@material-ui/icons/MenuBookOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default props => {
  const classes = useStyles();
  const { addedCourses, setAddedCourses } = props;
  return (
    <Paper className={classes.root}>
      {addedCourses.map((course, i) => (
        <Chip
          key={i}
          label={course.Name}
          onDelete={() => {
            setAddedCourses(addedCourses.filter(c => course !== c));
          }}
          className={classes.chip}
          icon={<MenuBookOutlined></MenuBookOutlined>}
        />
      ))}
    </Paper>
  );
};
