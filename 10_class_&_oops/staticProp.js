class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ // it stop using this to any child class or same class
        return '123'
    }
}

const name = new User('Linkan');
// console.log(name.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('Apple X', 'i@phone.com');

iphone.logMe();
console.log(iphone.createId());