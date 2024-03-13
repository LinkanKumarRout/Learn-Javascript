function setUsername(username){
    // complex DB call
    this.username = username
    console.log('called')
}

function createUser(username, email, password){
    setUsername.call(this, username); // to hold reference and pass value to another function

    this.email = email
    this.password = password
}

const linkan = new createUser("Linkan", "linkan@google.com", "123")

console.log(linkan);