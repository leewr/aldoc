class Student {
  fullName: String;
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return "hello" + person.firstName + " " + person.lastName
}
let user = new Student("Janme", "M.", "User");
document.body.innerHTML = greeter(user)
