import React, { useRef } from "react";
import CourseAdder from "./components/CourseAdder";
import Chip from "./components/Chip";
import TableDisplay from "./components/TableDisplay";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import { combinations } from "./util";
import useLocaleStorage from "./useLocalStorage.js";
import Fab from "@material-ui/core/Fab";
import html2canvas from "html2canvas";
import Camera from "@material-ui/icons/Camera";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function App() {
  const tableRef = useRef(null);
  const classes = useStyles();
  const [addedCourses, setAddedCourses] = useLocaleStorage("addedCourses", []);
  const schedules = combinations(addedCourses);
  const table = <TableDisplay tableRef={tableRef} schedules={schedules} />;

  async function download() {
    console.log(tableRef);
    tableRef.current.firstElementChild.firstElementChild.style.visibility =
      "hidden";
    let canvas = await html2canvas(tableRef.current);

    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = url;
    a.download = "table.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    tableRef.current.firstElementChild.firstElementChild.style.visibility = "";
  }

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
        {schedules.length !== 0 && table}
      </Container>
      <Fab
        lable="Screenshot"
        color="primary"
        onClick={download}
        className={classes.fab}
        disabled={schedules.length === 0}
      >
        <Camera />
      </Fab>
    </div>
  );
}

export default App;
