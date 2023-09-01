const submitBtn = document.getElementById("submitBtn");
const formInputs = [
  document.getElementById("firstName"),
  document.getElementById("lastName"),
  document.getElementById("email"),
  document.getElementById("gender"),
  document.getElementById("phone"),
];
const colorPicker = document.getElementById("colorPicker");
const dataTable = document.getElementById("dataTable");
const tableBody = document.getElementById("tableBody");
const colorWidthInput = document.getElementById("colorWidth");
let colorWidth = 100;

submitBtn.addEventListener("click", function () {
  const rowData = formInputs.map(input => input.value);

  // Check if any of the input fields are empty
  if (rowData.some(value => value === "")) {
    alert("Please fill in all the fields before submitting.");
    return; // Exit the function if any field is empty
  }

  addRowToTable(rowData);
  clearFormInputs();
});

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  dataTable.style.backgroundColor = selectedColor;
});

colorWidthInput.addEventListener("input", function () {
  const selectedColorWidth = colorWidthInput.value;
  dataTable.style.width = selectedColorWidth + "%";
});

function addRowToTable(data) {
  const newRow = document.createElement("tr");
  data.forEach(item => {
    const cell = document.createElement("td");
    cell.textContent = item;
    newRow.appendChild(cell);
  });
  tableBody.appendChild(newRow);
}

function clearFormInputs() {
  formInputs.forEach(input => {
    input.value = "";
  });
}