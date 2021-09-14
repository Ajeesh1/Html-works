class student{
    constructor(rol,name,course,total){
        this.rol=rol;
        this.name=name;
        this.course=course;
        this.total=total;

    }
    printDetails(){
        console.log(this.rol,this.name,this.course,this.total);
    }
}
var stud1=new student(1,"abc","v",20);

console.log(stud1);