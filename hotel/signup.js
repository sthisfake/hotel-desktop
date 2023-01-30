const { createUser } = require('./queries.js');
const {getData } = require('./home.js');
const { User } = require('./models/user.js');



const submit = document.getElementById('submitBut');
submit.addEventListener("click", function(event){
event.preventDefault();
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

if(username !== "" && password !== "" && firstname !== "" && lastname !== "" && email !== "" && phone !== ""){
    
    createUser(firstname, lastname , email , phone , username , password);

    const user = new User(firstname, lastname , email , phone , username , password);

    // getData(currentUser);

    window.location.href = 'home.html?user=' +  JSON.stringify(user);
    
  }

});
