

var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));

const { newRoom } = require('./queries.js');



const rooms = {  
             
    "room1": {
      "number": "854",
      "price": "200000"
    },
    "room2": {
      "number": "1010",
      "price": "80000"
    }, 
    "room3": {
      "number": "101",
      "price": "85000"
    },
    "room4": {
      "number": "909",
      "price": "90000"
    },
    "room5": {
      "number": "654",
      "price": "30000"
    },
}


      const foodList = document.querySelector('.food-list');

      for (const foodId in rooms) {
        const room = rooms[foodId];

        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const foodName = document.createElement('div');
        foodName.classList.add('food-name');
        foodName.innerText = room.number;
        foodItem.appendChild(foodName);

        const foodPrice = document.createElement('div');
        foodPrice.classList.add('food-price');
        foodPrice.innerText = room.price;
        foodItem.appendChild(foodPrice);

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.innerText = "reserve";
        foodItem.appendChild(buyButton);

        foodList.appendChild(foodItem);

        document.addEventListener("DOMContentLoaded", function() {

          buyButton.addEventListener('click', (event) => {

  
            newRoom( room["number"] , room["price"] , user.phone , user.password );
    
            window.location.href = 'home.html?user=' +  JSON.stringify(user);
            
            
          });
  
  
  
        });  
      }

      // const backButton = document.querySelector('.back-button');
      // backButton.addEventListener('click', () => {
      //   // Your code here to handle the back button
      // });

   



