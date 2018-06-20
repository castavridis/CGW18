/**
* https://ktmathews89.github.io/cg_winter_2018_instruction/cg_ed_3
*/

/**
  NOTE: (Shower thought): Consider developing material that re-inforces object
  prototypes and the exercise of searching for related functions
  
  Like:

  Create an array
  var myArray = new Array();
  
  Shorthand
  var myArray = [];
  
  An array is like a box, and you can store information inside of it
  var myWord = "Hello";
  var myColor = "Blue";
  var myNumber = 1;
  
  You can instantiate, or create this box, with objects inside;
  var myOtherArray = [myWord, myColor, myNumber];
  
  Or, you can get an empty box
  var myEmptyArray = [];
  
  And push stuff into it later
  myEmptyArray.push(myWord);
  myEmptyArray.push(myColor);
  myEmptyArray.push(myNumber);
  
  See all of the functions that Array can use here:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  
  Exercises:
  1) Create a new array with "","",""
  2) Remove something from that array
  3) Cut that array in half
  4) Get the length
*/

// NOTE: (Shower thought, II): Should class time be spent on working through exercises and asking for help?

// TODO: More clearly defined goals in the future like the one here

// TODO: Would it be helpful to have a refactoring step between each part?
// like, this is what we did. Now let's refactor; here's why.

function getRatingAvg(ratings) {
  var totalRating = 0;
  for (var i = 0; i < ratings.length; i++) {
    totalRating += ratings[i];
  }
  return parseFloat((totalRating / ratings.length).toFixed(2));
}

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

// do {
//   var promptRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
// } while (promptRating < 0.0 || promptRating > 5.0);

// addTeacherRating(teacherRatings, promptRating);

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

// var studentGraduationYear = prompt("What year will you graduate college?");
// var studentGraduationMonth = prompt("Which month will you graduate college?"); // Only accepts May or December

// if (studentGraduationYear.length) {
//   var gradMessage = "";
//   if (studentGraduationYear >= 2018 && studentGraduationYear <= 2022) {
//     gradMessage = "You are in college.";
//   } else if (studentGraduationYear >= 2023 && studentGraduationYear <= 2026) {
//     gradMessage = "You are in high school.";
//   } else {
//     gradMessage = false;
//   }
//   console.log(gradMessage);
// }

var studentClass = "";
var welcomeHighSchoolStudent = function (studentClass) {
  alert("You're still a " + studentClass + " in high school!");
}
var welcomeCollegeStudent = function (studentClass) {
  alert("Welcome " + studentClass + "!");
}

function welcomeStudentsByGraduatingClass(gradMonth, gradYear, welcomeFunction) {
}

// TODO: Pseudocode opportunity here
/**
  
*/

// COURSES
var courseName = "Saggy Denim",
    courseDepartment = "1995",
    courseTeacher = "Princess Nokia",
    courseSemester = "Fall 2018",
    coursesList = [
      ["Alchemy", "Magic"],
      ["Potions", "Magic"],
      ["Graphics", "Design"]
    ];

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

// do {
//   var courseFilter = prompt("What department are you looking for a course in?");
//   var foundCourse = filterCourses(coursesList, courseFilter);
// } while (!foundCourse);

console.log("Course:\t\t%s\nDepartment:\t%s\nTeacher:\t%s\nDepartment:\t%s",
            courseName,
            courseDepartment,
            courseTeacher,
            courseSemester);