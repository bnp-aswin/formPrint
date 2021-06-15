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
        preventSubmit(e){
 e.preventDefault();
        }
    },
})