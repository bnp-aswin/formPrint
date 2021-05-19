
    var fname= [];
        var lname = [];
        var code = [];
        var dob = [];
         var desig = [];

        var a = 1;
        var b = 0;

        function AddRow() {

            var container = document.getElementById('formDetails');
            var addRow = container.insertRow(a);
            var designation=document.employee.designation.value;

if(designation=="select"){
    alert("Plz select the designation")
    return false;
}
else if(designation=="Software Engineer"){
    designation="Software Engineer"

}
else if(designation=="Web Developer"){
    designation="Web Developer"

}
            fname[b] = document.getElementById("fname").value;
            lname[b] = document.getElementById("lname").value;
            code[b] = document.getElementById("code").value;
            dob[b] = document.getElementById("dob").value;
            desig[b] = designation;

            var cell1 = addRow.insertCell(0);
            var cell2 = addRow.insertCell(1);
            var cell3 = addRow.insertCell(2);
            var cell4 = addRow.insertCell(3);
            var cell5 = addRow.insertCell(4);

            cell1.innerHTML = fname[b];
            cell2.innerHTML = lname[b];
            cell3.innerHTML = code[b];
            cell4.innerHTML = dob[b];
            cell5.innerHTML = desig[b];
            a++;
            b++;
        }

