let usersList = [];
let currentIndex = -1;

function renderUsers() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  usersList.forEach((user, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.userName}</td>
        <td>${user.userEmail}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function addOrUpdateUser() {
  let nameValue = document.getElementById("inputName").value.trim();
  let emailValue = document.getElementById("inputEmail").value.trim();

  if (nameValue === "" || emailValue === "") {
    alert("Please enter both name and email.");
    return;
  }

  if (currentIndex === -1) {
    usersList.push({ userName: nameValue, userEmail: emailValue });
  } else {
    usersList[currentIndex] = { userName: nameValue, userEmail: emailValue };
    currentIndex = -1;
    document.getElementById("btnSubmit").textContent = "Add";
  }

  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";

  renderUsers();
}

function editUser(index) {
  document.getElementById("inputName").value = usersList[index].userName;
  document.getElementById("inputEmail").value = usersList[index].userEmail;
  document.getElementById("btnSubmit").textContent = "Update";
  currentIndex = index;
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    usersList.splice(index, 1);
    renderUsers();
  }
}

document.getElementById("btnSubmit").addEventListener("click", addOrUpdateUser);