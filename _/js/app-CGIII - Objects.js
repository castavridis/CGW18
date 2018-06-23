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

// TEACHERS ******************************************************************************************
var teacherName = "Sally Jones",
    teacherDepartment = "Physics",
    teacherRatings = [0.0, 1.5, 5.0],
    avgRating = getRatingAvg(teacherRatings);

// TODO: Some more guidance about anonymous functions and objects key/values
// TODO: More info about "this"
var teacher = {
  name: "Princess Nokia",
  department: "Music",
  ratings: [0.0, 1.5, 5.0],
  addTeacherRating: function (newRating) {
    this.ratings.push(parseFloat(newRating));
    alert("Thanks for your review! " + this.name + " average rating is now " + this.getAvgRating() +  ".");
    return;
  },
  getAvgRating: function () {
    // TODO: If anything inside the function looks like it "could reference a property of the teacher object"
    var totalRating = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      totalRating += this.ratings[i];
    }
    return parseFloat((totalRating / this.ratings.length).toFixed(2));
  }
};
var teacher1 = {
  name: "Hermoine Granger",
  department: "Magic",
  ratings: [0.0, 1.5, 5.0],
  addTeacherRating: function (newRating) {
    this.ratings.push(parseFloat(newRating));
    alert("Thanks for your review! " + this.name + " average rating is now " + this.getAvgRating() +  ".");
    return;
  },
  getAvgRating: function () {
    // TODO: If anything inside the function looks like it "could reference a property of the teacher object"
    var totalRating = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      totalRating += this.ratings[i];
    }
    return parseFloat((totalRating / this.ratings.length).toFixed(2));
  }
};
var teacher2 = {
  name: "Hagrid",
  department: "Magic Engineering",
  ratings: [0.0, 1.5, 5.0],
  addTeacherRating: function (newRating) {
    this.ratings.push(parseFloat(newRating));
    alert("Thanks for your review! " + this.name + " average rating is now " + this.getAvgRating() +  ".");
    return;
  },
  getAvgRating: function () {
    // TODO: If anything inside the function looks like it "could reference a property of the teacher object"
    var totalRating = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      totalRating += this.ratings[i];
    }
    return parseFloat((totalRating / this.ratings.length).toFixed(2));
  }
};

do {
  var promptRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
} while (promptRating < 0.0 || promptRating > 5.0);

teacher.addTeacherRating(promptRating);

console.log("%cTeacher:\t%s", "color: mediumaquamarine;", teacher.name);
console.log("%cDepartment:\t%s", "color: goldenrod;", teacher.department);
console.log("%cRatings:\t%o", "color: salmon;", teacher.ratings);
console.log("%cAvg Rating:\t%f", "color: orchid;", teacher.avgRating);

//addTeacherRating(teacherRatings, promptRating);

// console.log("%cTeacher:\t%s", "color: mediumaquamarine;", teacherName);
// console.log("%cDepartment:\t%s", "color: goldenrod;", teacherDepartment);
// console.log("%cRatings:\t%o", "color: salmon;", teacherRatings);
// console.log("%cAvg Rating:\t%f", "color: orchid;", avgRating);

// STUDENTS ******************************************************************************************
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

var studentGraduationYear = "";
do {
  studentGraduationYear = prompt("What year will you graduate college?");
} while (studentGraduationYear == "");

var studentGraduationMonth = prompt("Which month will you graduate college? (May or December)"); // Only accepts May or December
do {
} while (studentGraduationMonth != "May" && studentGraduationMonth != "December");

// TODO: There is a lot of jumping around between Step 4 and Step 3
// TODO: It might be nice to show example code before each step; but that's more like a tutorial than a coding challenge setup
// TODO: Had to move this code around a bunch because I knew that it was going to be called below, not 100% that a student would know to do that based on previous knowledge
var studentClass = "";
var welcomeHighSchoolStudent = function (studentClass) {
  var message = "You're still a " + studentClass + " in high school!";
  alert(message);
  return message;
}
var welcomeCollegeStudent = function (studentClass) {
  var message = "Welcome " + studentClass + "!";
  alert(message);
  return message;
}
var welcomeUnknownStudent = function () {
  return "It seems like you are not in college or in high school.";
}
if (studentGraduationYear && studentGraduationYear.length > 0) {
  //var gradMessage = "";
  if (studentGraduationYear >= 2018 && studentGraduationYear <= 2022) {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeCollegeStudent);
    //welcomeHighSchoolStudent("freshman");
    //gradMessage = "You are in college.";
  } else if (studentGraduationYear >= 2023 && studentGraduationYear <= 2026) {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeHighSchoolStudent);
    //welcomeCollegeStudent("freshman");
    //gradMessage = "You are in high school.";
  } else {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeUnknownStudent);
  }
  //console.log(gradMessage);
}

// TODO: Objects Step 1: Break up content so there's more of a break in between or recognition of completion / review!


//  TODO: Not sure what "you will be adjusting the gradYear by 4" means
function welcomeStudentByGraduatingClass(gradMonth, gradYear, welcomeFunction) {
  var className = "",
      classNumber = (2026 - gradYear) % 4;
  // NOTE: Code below may not have been coded using the knowledge that CoderGirls have:
  switch (classNumber) {
    case 0:
      className = "Senior";
      break;
    case 1:
      className = "Junior";
      break;
    case 2:
      className = "Sophomore";
      break;
    case 3:
      className = "Freshman";
      break;
  }
  console.log(gradMonth, gradYear, welcomeFunction(className));
}


// TODO: Pseudocode opportunity here
/**
  
*/

// COURSES ******************************************************************************************
var courseName = "Saggy Denim",
    courseDepartment = "1995",
    courseTeacher = "Princess Nokia",
    courseSemester = "Fall 2018";
    // coursesList = [
    //   ["Alchemy", "Magic"],
    //   ["Potions", "Magic"],
    //   ["Graphics", "Design"]
    // ];

// TODO: Step 3 is confusing, perhaps some guidance "create multiple course objects like you did with rating1, rating2, rating3"
var course = {
  name: '1995',
  department: 'Music',
  teacher: teacher,
  semester: 'Fall 2018'
};
var course1 = {
  name: 'Alchemy',
  department: 'Magic',
  teacher: teacher1,
  semester: 'Fall 2018'
};
var course2 = {
  name: 'Potions',
  department: 'Magic',
  teacher: teacher1,
  semester: 'Fall 2018'
};
var course3 = {
  name: 'Dungeon Building',
  department: 'Engineering',
  teacher: teacher2,
  semester: 'Fall 2018'
};
var courseList = [course, course1, course2, course3];

// TODO: Step 5: Encourage students to explore objects in their WebDev tools console to more quickly access and check if their objects are correct
function filterCourses(courses, department) {
  var foundCourses = [];
  for (var i = 0; i < courses.length; i++) {
    var course = courses[i]; // To help people think about arr vs. single
    if (course.department == department) {
      foundCourses.push(course.name);
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
  var foundCourse = filterCourses(courseList, courseFilter);
} while (!foundCourse);

console.log("Course:\t\t%s\nDepartment:\t%s\nTeacher:\t%s\nDepartment:\t%s",
            courseName,
            courseDepartment,
            courseTeacher,
            courseSemester);