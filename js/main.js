
function readData() {
    var employeeData = {};
    employeeData['firstName'] = document.getElementById('first-name').value;
    employeeData['lastName'] = document.getElementById('last-name').value;
    employeeData['employeeCode'] = document.getElementById('employee-code').value;
    employeeData['dateOfBirth'] = document.getElementById('dob').value;
    employeeData['designation'] = document.getElementById('designation').value;
    return employeeData;

}

function writeData(record) {
    var tableBody = document.getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = record.firstName;
    newRow.insertCell(1).innerHTML = record.lastName;
    newRow.insertCell(2).innerHTML = record.employeeCode;
    newRow.insertCell(3).innerHTML = record.dateOfBirth;
    newRow.insertCell(4).innerHTML = record.designation;
    newRow.insertCell(5).innerHTML = '<a onClick="">Edit</a>'
    newRow.insertCell(6).innerHTML = '<a onClick="">Delete</a>'

}
document.getElementById('btn-save').addEventListener('click', function (event) {
    event.preventDefault();
    var formDetails = readData();
    writeData(formDetails);
});