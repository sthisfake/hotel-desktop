

var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));

const { getLastRooms } = require('./queries.js');

const rooms = {}

getLastRooms(user.phone , user.password)
        .then(result => {
    console.log(result);
            
    for(i=0 ; i<result.length ; i++){

        str = "room" + i.toString()
        rooms[str] = {
            "number" : result[i].room_number,
            "price": result[i].room_price
        }
            
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

    //   const buyButton = document.createElement('button');
    //   buyButton.classList.add('buy-button');
    //   buyButton.innerText = "reserve";
    //   foodItem.appendChild(buyButton);

      foodList.appendChild(foodItem);

      document.addEventListener("DOMContentLoaded", function() {

        buyButton.addEventListener('click', (event) => {


          newRoom( room["number"] , room["price"] , user.phone , user.password );
  
          window.location.href = 'home.html?user=' +  JSON.stringify(user);
          
          
        });



      });  
    }
        })



   



