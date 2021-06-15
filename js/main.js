let employeeDetsils=new Vue({
    el:'#root',
    data:{
        employees:[],
        employee:{},
        firstName:'',
        lastName:'',
        employeeCode:'',
        dob:'',
        designation:'',
        selectedRow:'',
    },
    methods: {
        addEmployee(){
                this.employee = { fname: this.firstName, lname: this.lastName, id: this.employeeCode, dob: this.dob ,designation:this.designation}
                    this.employees.push(this.employee);
                    this.employee = {};
                    this.firstName = '';
                    this.lastName = '';
                    this.employeeCode= '';
                    this.dob = '';
                    this.designation = '';
        },
        rowSelect(index,fname,lname,id,dob,designation){
this.selectRow = index;
                    this.firstName = fname;
                    this.lastName = lname;
                    this.employeeCode = id;
                    this.dob = dob;
                    this.designation=designation;
        },
        preventSubmit(e){
 e.preventDefault();
        }
    },
})