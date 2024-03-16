class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // getter and setter name remains same as constructor arguments

    // here we give _password bcz of naming conflict between this.password of constructor and this._password of get and set

    get password(){ // this will take value from out of class
        return this._password.toUpperCase()
    }

    set password(value){ // this will change the value but original value remains same
        this._password = value; // never use return in setter
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const linkan = new User('link@google.com', '123abc');

console.log(linkan.password);
console.log(linkan.email);