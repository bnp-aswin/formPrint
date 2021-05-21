function formPrint() {

    var myForm = document.getElementById('employeeDetails');
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var employeeCode = document.getElementById('code').value;
    var dateofBirth = document.getElementById('dob').value;
    var designation = document.getElementById('designation').value;
    if (firstName == "" && lastName == "" && employeeCode == "" && dateofBirth == "" && designation == "0") {
        alert('Please fill all fields');
    } else {
        var printTable = document.getElementById('prinTable');
        var inRow = printTable.insertRow(1);
        var fname = inRow.insertCell(0);
        var lname = inRow.insertCell(1);
        var code = inRow.insertCell(2);
        var dob = inRow.insertCell(3);
        var desig = inRow.insertCell(4);

        fname.innerHTML = firstName;
        lname.innerHTML = lastName;
        code.innerHTML = employeeCode;
        dob.innerHTML = dateofBirth;
        desig.innerHTML = designation;
        myForm.reset();
    }
}
document.getElementById('btn-save').addEventListener('click', function (event) {
    event.preventDefault();
});
document.getElementById('btn-save').addEventListener('click', formPrint);