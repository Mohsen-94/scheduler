import React, { useState } from "react";
import CourseAdder from "./components/CourseAdder";
import Chip from "./components/Chip";
import TableDisplay from "./components/TableDisplay";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import { combinations } from "./util";
import useLocaleStorage from "./useLocalStorage.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function App() {
  const classes = useStyles();
  const [addedCourses, setAddedCourses] = useLocaleStorage("addedCourses", []);
  const schedules = combinations(addedCourses);

  return (
    <div className={classes.root}>
      <Header />
      <Container>
        {addedCourses.length !== 0 && (
          <Chip setAddedCourses={setAddedCourses} addedCourses={addedCourses} />
        )}
        <CourseAdder
          setAddedCourses={setAddedCourses}
          addedCourses={addedCourses}
        />
        {schedules.length !== 0 && <TableDisplay schedules={schedules} />}
      </Container>
    </div>
  );
}

export default App;
