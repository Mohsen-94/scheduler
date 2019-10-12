import _ from "underscore";
//Combinations util function
_.mixin({
  combinations: function() {
    return _.reduce(
      Array.prototype.slice.call(arguments, 1),
      function(ret, newarr) {
        return _.reduce(
          ret,
          function(memo, oldi) {
            return memo.concat(
              _.map(newarr, function(newi) {
                return oldi.concat([newi]);
              })
            );
          },
          []
        );
      },
      _.map(arguments[0], function(i) {
        return [i];
      })
    );
  }
});

function isConflict(course1, course2) {
  //some refactoring here later
  if (
    course1.Sunday &&
    course2.Sunday &&
    _.intersection(course1.Sunday.split(","), course2.Sunday.split(","))
      .length !== 0
  ) {
    return true;
  }
  if (
    course1.Monday &&
    course2.Monday &&
    _.intersection(course1.Monday.split(","), course2.Monday.split(","))
      .length !== 0
  ) {
    return true;
  }
  if (
    course1.Tuesday &&
    course2.Tuesday &&
    _.intersection(course1.Tuesday.split(","), course2.Tuesday.split(","))
      .length !== 0
  ) {
    return true;
  }
  if (
    course1.Wednesday &&
    course2.Wednesday &&
    _.intersection(course1.Wednesday.split(","), course2.Wednesday.split(","))
      .length !== 0
  ) {
    return true;
  }
  if (
    course1.THU &&
    course2.THU &&
    _.intersection(course1.THU.split(","), course2.THU.split(",")).length !== 0
  ) {
    return true;
  }
  return false;
}

function isValid(sch) {
  if (sch.length >= 2) {
    for (let i = 0; i < sch.length; i++) {
      const course1 = sch[i];
      for (let j = i + 1; j < sch.length; j++) {
        const course2 = sch[j];
        if (isConflict(course1, course2)) {
          return false;
        }
      }
    }
    return true;
  } else return true;
}

function randomColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}

export function to2D(sch) {
  let arr2D = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ];

  sch.forEach(course => {
    let backgroundColor = randomColor();
    if (course.Sunday) {
      course.Sunday.split(",")
        .filter(Boolean)
        .map(p => parseInt(p))
        .forEach(p => {
          arr2D[p - 1][0] = { name: course.Name, color: backgroundColor };
        });
    }
    if (course.Monday) {
      course.Monday.split(",")
        .filter(Boolean)
        .map(p => parseInt(p))
        .forEach(p => {
          arr2D[p - 1][1] = { name: course.Name, color: backgroundColor };
        });
    }
    if (course.Tuesday) {
      course.Tuesday.split(",")
        .filter(Boolean)
        .map(p => parseInt(p))
        .forEach(p => {
          arr2D[p - 1][2] = { name: course.Name, color: backgroundColor };
        });
    }
    if (course.Wednesday) {
      course.Wednesday.split(",")
        .filter(Boolean)
        .map(p => parseInt(p))
        .forEach(p => {
          arr2D[p - 1][3] = { name: course.Name, color: backgroundColor };
        });
    }
    if (course.Thursday) {
      course.Thursday.split(",")
        .filter(Boolean)
        .map(p => parseInt(p))
        .forEach(p => {
          arr2D[p - 1][4] = { name: course.Name, color: backgroundColor };
        });
    }
  });

  return arr2D;
}

export const combinations = addedCourses => {
  let names = _.uniq(addedCourses.map(course => course.Name));
  let sortedBuckets = names.map(sub =>
    addedCourses.filter(course => course.Name === sub)
  );
  return _.combinations(...sortedBuckets).filter(isValid);
};
