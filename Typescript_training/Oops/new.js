var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var off_address = "xyz school";
var student = /** @class */ (function () {
    function student() {
        this.name = "Rahul";
        this.id = 851;
        this.home_address = "Home";
    }
    return student;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Ramesh";
        _this.id = 562;
        _this.home_address = "flats";
        return _this;
    }
    return teacher;
}(student));
function peon(name, id) {
    this.name = name;
    this.id = id;
}
var principal = /** @class */ (function (_super) {
    __extends(principal, _super);
    function principal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return principal;
}(teacher));
var Peon = new peon("ramu", 256); //calling a function
//objects
var Teacher = new teacher();
var Student = new student();
var Principal = new principal();
//declaring data of Principal
Principal.name = "Shastri";
Principal.id = 256;
Principal.home_address = "bunglow";
//Principal.off_address=""
//Instance of
if (Student instanceof principal) {
    console.log("student===Student");
}
else {
    console.log("Student is not instance of principal ");
}
if (Teacher instanceof student)
    console.log("Student===teacher");
if (Principal instanceof teacher)
    console.log("Principal===teacher");
if (Principal instanceof student)
    console.log("principal===student");
console.log("Student name", Student.name);
console.log("global variable:", off_address);
console.log("teacher addres:", Teacher.home_address);
console.log("function calling peon", Peon.name);
