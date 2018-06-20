/**
* https://ktmathews89.github.io/cg_winter_2018_instruction/cg_ed_1
*/

// TEACHERS

var teacherName = "Sally Jones",
    teacherDepartment = "Physics",
    teacherRating1 = 0.0,
    teacherRating2 = 1.5,
    teacherRating3 = 5.0,
    avgRating = (teacherRating1 + teacherRating2 + teacherRating3) / 3;

avgRating = avgRating.toFixed(2);

console.log("%cTeacher:\t%s", "color: mediumaquamarine;", teacherName);
console.log("%cDepartment:\t%s", "color: goldenrod;", teacherDepartment);
console.log("%cRatings:\t%f, %f, %f", "color: salmon;", teacherRating1, teacherRating2, teacherRating3);
console.log("%cAvg Rating:\t%f", "color: orchid;", parseFloat(avgRating));

/**
*  TODO: Coding challenge should reinforce the idea that these variable names are based off
*  of the data shown in the mockups
*/

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
// TODO: Should understand that using the same variable names will override variables from before
var courseName = "Saggy Denim",
    courseDepartment = "1995",
    courseTeacher = "Princess Nokia",
    courseSemester = "Fall 2018";

console.log("Course:\t\t%s\nDepartment:\t%s\nTeacher:\t%s\nDepartment:\t%s",
            courseName,
            courseDepartment,
            courseTeacher,
            courseSemester);