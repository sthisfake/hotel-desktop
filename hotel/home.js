const { User } = require('./models/user.js');
const {getDataProfile } = require('./profile.js');

// var currentUser;

// function getData(something){

//  const currentUser = new User(something.firstName , something.lastName ,
//      something.email , something.phone , something.userName , something.password);

//     }

var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));


// module.exports = {getData}

document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('logout');
  
    logout.addEventListener("click", () => {
  
      window.location.href = 'firstPage.html';
  
    });
  
  });

  document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('profile');
  
    logout.addEventListener("click", () => {
  
      window.location.href = 'profile.html?user=' +  JSON.stringify(user);

      // getDataProfile(currentUser);
  
    });
  
  });  

  document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('order-food');
  
    logout.addEventListener("click", () => {

      window.location.href = 'orderFood.html?user=' +  JSON.stringify(user);
  
  
    });
  
  });  

  document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('reserve-room');
  
    logout.addEventListener("click", () => {
  
      window.location.href = 'reserveRoom.html?user=' +  JSON.stringify(user);
  
    });
  
  });  

  document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('last-foods');
  
    logout.addEventListener("click", () => {
  
      window.location.href = 'lastFoods.html?user=' +  JSON.stringify(user);
  
    });
  
  }); 

  document.addEventListener("DOMContentLoaded", function() {

    const logout = document.getElementById('last-rooms');
  
    logout.addEventListener("click", () => {
  
      window.location.href = 'lastRooms.html?user=' +  JSON.stringify(user);
  
    });
  
  }); 
  




