const { checkIfUserExist } = require('./queries.js');
const {getData } = require('./home.js');
const {User} = require('./models/user.js');



const submit = document.getElementById('submitBut');
submit.addEventListener("click", function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;

  if(phoneNumber.trim().length > 0 &&  password.trim().length > 0){
    
    
    checkIfUserExist(phoneNumber, password)
    .then(result => {
      if (result.length === 0) {
        
        window.location.href = 'login.html';
      } else {
        const user =  new User(result[0].firstName, result[0].lastName , result[0].email , result[0].phone , result[0].userName , result[0].password);
        // getData(user)
        window.location.href = 'home.html?user=' +  JSON.stringify(user);
      }
    })
    
  }
  
});


