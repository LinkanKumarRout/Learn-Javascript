// getter and setter using Object

const User = {
    _email: 'linkan@google.com',
    _password: '123abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

console.log(User.email);

