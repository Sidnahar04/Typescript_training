const name_arr: string[]=[]
const rollno_arr: number[]=[]

function store() {
    const val1 = (<HTMLInputElement>document.querySelector('#name')).value;
    const val2 = parseInt((<HTMLInputElement>document.querySelector('#rollno')).value);

    function userdata(x,y){
        let Entry:(string|number)=x+' is Entered and Roll no is '+y
        console.log(Entry)
        return Entry
    }
    userdata(val1,val2)

    name_arr.push(val1);
    rollno_arr.push(val2);
    
    name_arr.filter((item, index) => {
        console.log(name_arr.indexOf(item) === index);
        return name_arr.indexOf(item) === index;
    });
    
}




