
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@gamil.com', '123');
const tea = new User('tea');

chai.addCourse();
// tea.addCourse();
tea.logMe();
chai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);