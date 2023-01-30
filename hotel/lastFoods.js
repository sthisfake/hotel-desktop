

var urlParams = new URLSearchParams(window.location.search);
var user = JSON.parse(urlParams.get("user"));

const { getLastFoods } = require('./queries.js');

const foods = {}

        getLastFoods(user.phone , user.password)
        .then(result => {
    console.log(result);
            
    for(i=0 ; i<result.length ; i++){

        str = "food" + i.toString()
        foods[str] = {
            "name" : result[i].food_name,
            "price": result[i].price
        }
            
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

      // const buyButton = document.createElement('button');
      // buyButton.classList.add('buy-button');
      // buyButton.innerText = "buy";
      // foodItem.appendChild(buyButton);

      foodList.appendChild(foodItem);
  }
        })





  

        // document.addEventListener("DOMContentLoaded", function() {

        //   buyButton.addEventListener('click', (event) => {

        //     newOrder(food["name"] , food["price"] , user.phone , user.password)
        //     .then(result => {
        //     //   if (result.length === 0) {
                
        //     //     // window.location.href = 'login.html';
        //     //   } else {
        //     //     // const user =  new User(result[0].firstName, result[0].lastName , result[0].email , result[0].phone , result[0].userName , result[0].password);
        //     //     // // getData(user)
        //     //     // window.location.href = 'home.html?user=' +  JSON.stringify(user);
        //     //   }

        //         console.log(result[0].person_id)
        //     })


  
        //     // newOrder( food["name"] , food["price"] , user.phone , user.password );
    
        //     // window.location.href = 'home.html?user=' +  JSON.stringify(user);
            
            
        //   });
  
  
  
        // });  


      // const backButton = document.querySelector('.back-button');
      // backButton.addEventListener('click', () => {
      //   // Your code here to handle the back button
      // });

   



