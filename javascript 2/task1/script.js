var courses = ["html", "css", "js", "bootstrap"];
var input = prompt("Enter Course");

var index = courses.findIndex((course) => course === input);

if (index !== -1) {
    console.log("Found");
} else {
    courses.push(input);
    console.log(input);
}

console.log(courses);
