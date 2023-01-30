const { User } = require("./models/user");
const { updateInfo } = require('./queries.js');



var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));
   


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("name").disabled = false;
    document.getElementById("name").value = user.firstname;
    document.getElementById("name").disabled = true;

    document.getElementById("lastName").disabled = false;
    document.getElementById("lastName").value = user.lastname;
    document.getElementById("lastName").disabled = true;

    document.getElementById("email").disabled = false;
    document.getElementById("email").value = user.email;
    document.getElementById("email").disabled = true;

    document.getElementById("phoneNumber").disabled = false;
    document.getElementById("phoneNumber").value = user.phone;
    document.getElementById("phoneNumber").disabled = true;

    document.getElementById("username").disabled = false;
    document.getElementById("username").value = user.username;
    document.getElementById("username").disabled = true;


    document.getElementById("address").disabled = false;
    document.getElementById("address").value = user.address;


    document.getElementById("nationalId").disabled = false;
    document.getElementById("nationalId").value = user.nationalId;


    document.getElementById("country").disabled = false;
    document.getElementById("country").value = user.country;


    document.getElementById("city").disabled = false;
    document.getElementById("city").value = user.city;


    const change  = document.getElementById("submitBut");
    change.addEventListener("click", (event) => {
        event.preventDefault();
        city = document.getElementById("city").value
        country = document.getElementById("country").value
        nationalId = document.getElementById("nationalId").value
        address = document.getElementById("address").value;

        // user.setAddress(address)
        // user.setCountry(country)
        // user.setCity(city)
        // user.setNationalId(nationalId)

        updateInfo(user.phone , user.password , city , country , nationalId , address);
        console.log(user.phone , user.password)

        // window.location.href = 'profile.html?user=' +  JSON.stringify(user);
    
      });



  
  });




  








