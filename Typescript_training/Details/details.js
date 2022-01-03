var name_arr = [];
var rollno_arr = [];
function store() {
    var val1 = document.querySelector('#name').value;
    var val2 = parseInt(document.querySelector('#rollno').value);
    function userdata(x, y) {
        var Entry = x + ' is Entered and Roll no is ' + y;
        console.log(Entry);
        return Entry;
    }
    userdata(val1, val2);
    name_arr.push(val1);
    rollno_arr.push(val2);
    name_arr.filter(function (item, index) {
        console.log(name_arr.indexOf(item) === index);
        return name_arr.indexOf(item) === index;
    });
    rollno_arr.filter(function (item, index) {
        console.log(rollno_arr.indexOf(item) === index);
        return rollno_arr.indexOf(item) === index;
    });
}
