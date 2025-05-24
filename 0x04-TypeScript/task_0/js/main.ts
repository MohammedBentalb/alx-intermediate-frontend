interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "Mohammed",
  lastName: "Noah",
  age: 20,
  location: "Marrakech",
};

const student2: student = {
  firstName: "Ali",
  lastName: "Ahmed",
  age: 20,
  location: "Marrakech",
};

const studentList: student[] = [student1, student2];

let table = document.createElement("table");

let headerRow = table.insertRow();
let NameHeader = headerRow.insertCell();
NameHeader.textContent = "Name";
let locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

studentList.forEach((student) => {
  let row = table.insertRow();
  let name = row.insertCell();
  let location = row.insertCell();
  name.textContent = student.firstName;
  location.textContent = student.location;
});

document.body.appendChild(table);
