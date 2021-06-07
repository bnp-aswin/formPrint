var employeeForm = document.getElementById('employee-form');
var selectedRow = null;

function readData() {
    var employeeData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        employeeCode: document.getElementById('employee-code').value,
        dateOfBirth: document.getElementById('dob').value,
        designation: document.getElementById('designation').value

    };
    return employeeData;
}

function writeData(record) {
    var tableBody = document.getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var rowCount = document.getElementsByTagName('tr');
    newRow.insertCell(0).innerHTML = record.firstName;
    newRow.insertCell(1).innerHTML = record.lastName;
    newRow.insertCell(2).innerHTML = record.employeeCode;
    newRow.insertCell(3).innerHTML = record.dateOfBirth;
    newRow.insertCell(4).innerHTML = record.designation;
    newRow.insertCell(5).innerHTML = '<a onClick="editRow(this)"><i class="bi bi-pencil-fill"></i></a>'
    newRow.insertCell(6).innerHTML = '<a onClick="deleteData(this)"><i class="bi bi-trash-fill"></i></a>'
    employeeForm.reset();

}

function deleteData(record) {
    if (confirm('R U sure that you want to delete this row')) {
        selectedRow = record.parentElement.parentElement;
        document.getElementById('employee-table').deleteRow(selectedRow.rowIndex);
        var selectID = document.getElementById('employee-code');
        selectID.removeAttribute('readonly');
        employeeForm.reset();
        document.getElementById('btn-save').value = "Add Employee";
        selectedRow = null
    }
}

function editRow(record) {
    document.getElementById('btn-save').value = "Update";
    selectedRow = record.parentElement.parentElement;
    var selectID = document.getElementById('employee-code');
    selectID.setAttribute('readonly', 'readonly');
    document.getElementById('first-name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('last-name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('employee-code').value = selectedRow.cells[2].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[3].innerHTML;
    document.getElementById('designation').value = selectedRow.cells[4].innerHTML;
}

function updateDate(updatedValue) {

    var selectID = document.getElementById('employee-code');
    selectedRow.cells[0].innerHTML = updatedValue.firstName;
    selectedRow.cells[1].innerHTML = updatedValue.lastName;
    selectedRow.cells[2].innerHTML = updatedValue.employeeCode;
    selectedRow.cells[3].innerHTML = updatedValue.dateOfBirth;
    selectedRow.cells[4].innerHTML = updatedValue.designation;
    employeeForm.reset();
    selectID.removeAttribute('readonly');
    document.getElementById('btn-save').value = "Add Employee";
}
function idVerify(id){
    
}
document.getElementById('btn-save').addEventListener('click', function (event) {
    event.preventDefault();
    var formDetails = readData();
    if (selectedRow == null) {
        writeData(formDetails);
    } else {

        updateDate(formDetails)
    }

});