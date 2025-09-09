var users = [
    {
        name: "Asmaa",
        job: "Web Developer",
        age: 28
    },
    {
        name: "Laila",
        job: "Data Analyst",
        age: 25
    },
    {
        name: "Amira",
        job: "UI Designer",
        age: 22
    }
];

var i = users.findIndex((user) => user.age === 25);
console.log("Index:", i);
