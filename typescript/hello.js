var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello" + person.firstName + " " + person.lastName;
}
var user = new Student("Janme", "M.", "User");
document.body.innerHTML = greeter(user);
