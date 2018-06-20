/**
* https://ktmathews89.github.io/cg_winter_2018_instruction/cg_ed_2
*/

// TODO: Cover idea of plural vs. singular naming conventions for arrays vs. single variables
// e.g.) var ratings = [0, 1, 2]; vs var rating = "";

// TODO: Guidance about how to organize the file. Perhaps some knowledge about function hoisting
// function foo() {} can be called anywhere in the file.
// var foo = function() {} may only be called after it is defined.

function getRatingAvg(ratings) {
  var totalRating = 0;
  for (var i = 0; i < ratings.length; i++) {
    totalRating += ratings[i];
  }
  return parseFloat((totalRating / ratings.length).toFixed(2));
}

// TODO: Introduce <> as placeholder indicators

// TODO: Match <teacher's name> and <average rating>
function addTeacherRating(ratings, newRating) {
  ratings.push(newRating);
  alert("Thanks for your review! <teacher's name> average rating is now <average rating>.");
  return;
}

// TEACHERS
var teacherName = "Sally Jones",
    teacherDepartment = "Physics",
    teacherRatings = [0.0, 1.5, 5.0],
    avgRating = getRatingAvg(teacherRatings);

// TODO: Is it worth making sure there aren't smart quotes in the example text?
// Or is that a good exercise for typos?

// TODO: Clearer guidance about if the prompt should keep coming up *until* a correct review is entered
// so student can decided for a continuous check or single-time check
do {
  var promptRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
} while (promptRating < 0.0 || promptRating > 5.0);

addTeacherRating(teacherRatings, promptRating);

console.log("%cTeacher:\t%s", "color: mediumaquamarine;", teacherName);
console.log("%cDepartment:\t%s", "color: goldenrod;", teacherDepartment);
console.log("%cRatings:\t%o", "color: salmon;", teacherRatings);
console.log("%cAvg Rating:\t%f", "color: orchid;", avgRating);

// STUDENTS
var studentName = "Princess Nokia",
    studentMajor = "Brujas",
    studentEmail = "princess@nokia.nl",
    studentGpa = "3.7",
    studentCourses = "Saggy Denim";

console.log("Student:\t%s\nMajor:\t\t%s\nEmail:\t\t%s\nGPA:\t\t%s\nCourses:\t%s",
            studentName,
            studentMajor,
            studentEmail,
            studentGpa,
            studentCourses);

// COURSES
// TODO: courses array example and function "courses" is an opportunity to discuss scoping and naming variables
var courseName = "Saggy Denim",
    courseDepartment = "1995",
    courseTeacher = "Princess Nokia",
    courseSemester = "Fall 2018",
    coursesList = [
      ["Alchemy", "Magic"],
      ["Potions", "Magic"],
      ["Graphics", "Design"]
    ];

// TODO: Opportunity to call `filterCourses()` in DevTools console
function filterCourses(courses, department) {
  var foundCourses = [];
  for (var i = 0; i < courses.length; i++) {
    var course = courses[i]; // To help people think about arr vs. single
    if (course[1] == department) {
      foundCourses.push(course[0]);
      //console.log("Filtered Course: ", course[0]);
    }
  }
  if (foundCourses.length) {
    alert("Found matching courses: " + foundCourses);
  }
  return (foundCourses.length > 0);
}

do {
  var courseFilter = prompt("What department are you looking for a course in?");
  var foundCourse = filterCourses(coursesList, courseFilter);
} while (!foundCourse);


/**
* TODO: Show example of multi-dimensional array
* var arr1 = [0, 1];
* var arr2 = [2, 3];
* var arr3 = [4, 5];
* var twoDArr = [arr1, arr2, arr3];
* [
*   [0, 1],
*   [2, 3],
*   [4, 5]
*  ];
* twoDArr[0] // [0, 1]
* twoDArr[0][1] // 1
* twoDArr[2][0] // 4
* twoDArr[2][1] // 5
*/

console.log("Course:\t\t%s\nDepartment:\t%s\nTeacher:\t%s\nDepartment:\t%s",
            courseName,
            courseDepartment,
            courseTeacher,
            courseSemester);