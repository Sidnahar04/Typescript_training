var off_address:string="xyz school"

class student{
    id: number
    name:string
    home_address:string
    constructor(){
        this.name="Rahul"
        this.id=851
        this.home_address="Home"
    }
}

class teacher extends student{
    name:string="Ramesh"
    id:number=562
    home_address:string="flats"
}
function peon(this: any, name:string,id:number){
    this.name=name;
    this.id=id;
}
class principal extends teacher{
    name:string
    id:number
    //off_address:string
    home_address:string
    //super(off_address: any)
}



const Peon=new peon("ramu",256)        //calling a function

//objects
const Teacher=new teacher()
const Student=new student()
const Principal=new principal()


//declaring data of Principal
Principal.name="Shastri"
Principal.id=256
Principal.home_address="bunglow"
//Principal.off_address=""

//Instance of
if(Student instanceof principal){console.log("student===Student")}else{console.log("Student is not instance of principal ")}
if(Teacher instanceof student) console.log("Student===teacher")
if(Principal instanceof teacher) console.log("Principal===teacher")
if(Principal instanceof student) console.log("principal===student")


console.log("Student name",Student.name)
console.log("global variable:",off_address)
console.log("teacher addres:",Teacher.home_address)
console.log("function calling peon",Peon.name)




