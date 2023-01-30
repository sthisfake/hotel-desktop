

var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));

const { newOrder } = require('./queries.js');



      const foods = {  
             
        "food1": {
          "name": "pizza",
          "price": "200000"
        },
        "food2": {
          "name": "hamburger",
          "price": "80000"
        }, 
        "food3": {
          "name": "hot dog ",
          "price": "85000"
        },
        "food4": {
          "name": "salad",
          "price": "90000"
        },
        "food5": {
          "name": "sandwich",
          "price": "30000"
        },
    }


      const foodList = document.querySelector('.food-list');

      for (const foodId in foods) {
        const food = foods[foodId];

        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const foodName = document.createElement('div');
        foodName.classList.add('food-name');
        foodName.innerText = food.name;
        foodItem.appendChild(foodName);

        const foodPrice = document.createElement('div');
        foodPrice.classList.add('food-price');
        foodPrice.innerText = food.price;
        foodItem.appendChild(foodPrice);

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.innerText = "buy";
        foodItem.appendChild(buyButton);

        foodList.appendChild(foodItem);

        document.addEventListener("DOMContentLoaded", function() {

          buyButton.addEventListener('click', (event) => {
  
            newOrder( food["name"] , food["price"] , user.phone , user.password );
    
            window.location.href = 'home.html?user=' +  JSON.stringify(user);

            
          });
  
  
  
        });  
      }

      // const backButton = document.querySelector('.back-button');
      // backButton.addEventListener('click', () => {
      //   // Your code here to handle the back button
      // });

   



