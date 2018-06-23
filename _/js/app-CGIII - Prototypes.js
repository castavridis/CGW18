/**
* https://ktmathews89.github.io/cg_winter_2018_instruction/cg_ed_3
*/

// TODO: Show how to clean up code in material

// TEACHERS ******************************************************************************************

// TODO: Let students know they can clean up their old code after comitting
function Teacher (name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
};

// TODO: Call out prototype more why not instantiate teachers with functions?
Teacher.prototype = {
  addRating: function (newRating) {
    console.log(this.name);
    console.log(this.department);
    console.log('Avg. Rating: ', this.getAvgRating());
    console.log('Adding Rating: ', newRating);

    this.ratings.push(parseFloat(newRating));    
    alert("Thanks for your review! " + this.name + " average rating is now " + this.getAvgRating() +  ".");
    console.log('New Avg. Rating: ', this.getAvgRating());

    return;
  },
  getAvgRating: function () {
    var totalRating = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      totalRating += this.ratings[i];
    }
    return parseFloat((totalRating / this.ratings.length).toFixed(2));
  }
};

var teacher = new Teacher('Princess Nokia', 'Music', [0, 1.5, 5.0]);
var teacher1 = new Teacher('Hermoine Granger', 'Magic', [0, 1.5, 5.0]);
var teacher2 = new Teacher('Hagrid', 'Magic Engineering', [0, 1.5, 5.0]);

do {
  var promptRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
} while (promptRating < 0.0 || promptRating > 5.0);

teacher.addRating(promptRating);

// COURSES ******************************************************************************************

// TODO: Some function anatomy work, Constructor, Instance, Instance vs. Variable Name
function Course (name, department, teacher, semester) {
  this.name = name;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
}
Course.prototype = {
  filterCourses: function (courses, department) {
    var foundCourses = [];
    for (var i = 0; i < courses.length; i++) {
      var course = courses[i]; // To help people think about arr vs. single
      if (course.department == department) {
        foundCourses.push(course.name);
      }
    }
    if (foundCourses.length) {
      alert("Found matching courses: " + foundCourses);
    }
    return (foundCourses.length > 0);
  }
};
var course = new Course('1995', 'Music', teacher, 'Fall 2018');
var course1 = new Course('Alchemy', 'Magic', teacher1, 'Fall 2018');
var course2 = new Course('Potions', 'Magic', teacher1, 'Fall 2018');
var course3 = new Course('Dungeon Building', 'Engineering', teacher2, 'Fall 2018');
var courseList = [course, course1, course2, course3];

do {
  var courseFilter = prompt("What department are you looking for a course in?");
  var foundCourse = course.filterCourses(courseList, courseFilter);
} while (!foundCourse);

// STUDENTS ******************************************************************************************

// TODO: Had to move down since student1.addCourse(course2); References course variables

function Student(name, major, email, gpa, courses) {
  this.name = name;
  this.major = major;
  this.email = email;
  this.gpa = gpa;
  this.courses = courses;
};
Student.prototype = {
  addCourse: function(course) {
    console.log("Adding course " + course.name);
    console.log("To Student's Courses: " + this.name);
    console.log("Now they are taking...");
    this.courses.push(course);
    var currCourses = [];
    for (var i = 0; i < this.courses.length; i++) {
      currCourses.push(this.courses[i].name);
    }
    console.log(currCourses);
  },
  dropCourse: function(course) {
    for (var i = 0; i < this.courses.length; i++) {
      if (course == this.courses[i]) {
        this.courses.splice(i, 1);
      }
    }
  },
  changeMajor: function(newMajor) {
    this.major = newMajor;
  }
};

var student1 = new Student("Princess Nokia", "Brujas", "princess@nokia.nl", 3.7, [course, course1]);

student1.addCourse(course2);

var studentGraduationYear = "";
do {
  studentGraduationYear = prompt("What year will you graduate college?");
} while (studentGraduationYear == "");

var studentGraduationMonth = prompt("Which month will you graduate college? (May or December)"); // Only accepts May or December
do {
} while (studentGraduationMonth != "May" && studentGraduationMonth != "December");

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
  if (studentGraduationYear >= 2018 && studentGraduationYear <= 2022) {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeCollegeStudent);
  } else if (studentGraduationYear >= 2023 && studentGraduationYear <= 2026) {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeHighSchoolStudent);
  } else {
    welcomeStudentByGraduatingClass(studentGraduationMonth, studentGraduationYear, welcomeUnknownStudent);
  }
}

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