var courses = ["html", "css", "js", "bootstrap"]
var input = prompt("Enter Course")
if (courses.includes(input)) {
    console.log("Found")
}
else {
    courses.push(input);
    console.log(input)
}
console.log(courses)