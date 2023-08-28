const submitBtn = document.getElementById("submitBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const genderInput = document.getElementById("gender");
const phoneInput = document.getElementById("phone");
const colorPicker = document.getElementById("colorPicker");
const tableBody = document.getElementById("tableBody");
const dataTable = document.getElementById("dataTable");
let colorWidth = 100;

submitBtn.addEventListener("click", function () {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const gender = genderInput.value;
  const phone = phoneInput.value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${email}</td>
  <td>${gender}</td>
  <td>${phone}</td>
`;

  tableBody.appendChild(newRow);
  clearFormInputs();
});

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  dataTable.style.backgroundColor = selectedColor;
});

function clearFormInputs() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  genderInput.value = "";
  phoneInput.value = "";
}

const colorWidthInput = document.getElementById("colorWidth");

colorWidthInput.addEventListener("input", function () {
const selectedColorWidth = colorWidthInput.value;
dataTable.style.width = selectedColorWidth + "%";
});
