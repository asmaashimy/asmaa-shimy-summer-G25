var members = [];
var total = prompt("Enter number of members");

function addUser() {
    var id = prompt("Enter member ID");
    var name = prompt("Enter member name");
    var balance = prompt("Enter member balance");
    members.push({ "id": id, "name": name, "balance": balance });
}

for (var i = 0; i < total; i++) {
    addUser();
}
console.log(members);

function editUserBlanceById() {
    var id = prompt("Enter ID of member to edit");
    var ind = members.findIndex(e => e.id == id);
    var newbalance = prompt(`Enter new balance for member ${ind} with id: ${id}`);
    members[ind].balance = newbalance;
}
editUserBlanceById();
console.log(members);

function deleteUserById() {
    var id = prompt("Enter ID of member to delete");
    var ind = members.findIndex(e => e.id == id);
    if (ind != -1) {
        members.splice(ind, 1);
        console.log(`Member with id ${id} deleted successfully`);
    } else {
        console.log(`Member with id ${id} not found`);
    }
}
deleteUserById();
console.log(members);