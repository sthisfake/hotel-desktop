const { createDBConnection } = require('./dbConnection.js');
const connection = createDBConnection();

function createUser(firstName, lastName , email , phone , userName , password){

  const connection = createDBConnection();

    const sql = `INSERT INTO person (firstName, lastName , email , phone , userName , password , isCustomer) VALUES ('${firstName}', '${lastName}' ,
    '${email}' , '${phone}' , '${userName}' ,'${password}' , 'yes' )`;  
    connection.query(sql, function (err, result) {
      if (err) throw err;
      }); 

      connection.end();  


    creatCustomer(firstName, lastName , email , phone , userName , password) 
}
function checkIfUserExist(phoneNumber , password){

  const connection = createDBConnection();

    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM person WHERE phone = '${phoneNumber}' AND password = '${password}'`;
      connection.query(sql, function (err, result) {
        if (err) reject(err);
        resolve(result);
        connection.end();
      });
    });

    

  }

 
function creatCustomer(firstName, lastName , email , phone , userName , password){

  const connection = createDBConnection();

  const sql = `INSERT INTO customer (first_name, last_name , phone , email , userName , password ) VALUES ('${firstName}', '${lastName}' ,
  '${email}' , '${phone}' , '${userName}' ,'${password}')`;  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    });

    connection.end();

}  

function updateInfo(phone , password , city , country , nationalId , address ){

  const connection = createDBConnection();

  var sql = "UPDATE person SET national_id = ?, address = ? WHERE phone = ? AND password = ?";
  var data = [nationalId, address, phone, password];

  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    console.log("User updated successfully!");
  });

  var sql1 = "UPDATE customer SET country = ?, city = ? ,  address = ? WHERE phone = ? AND password = ?";
  var data1 = [country, city, address, phone , password];

  connection.query(sql1, data1, function (error, results, fields) {
    if (error) throw error;
    console.log("User updated successfully!");
  });

  connection.end();

}

function newOrder(foodName , foodPrice , phoneNumber , password){

  const connection = createDBConnection();

  const sql2 = `SELECT person_id FROM person WHERE phone = '${phoneNumber}' AND password = '${password}'`;  


  connection.query(sql2, function (err, result) {
    sth = result[0].person_id;
    const sql = `INSERT INTO orders (person_id, food_name , price) VALUES ('${sth}', '${foodName}' ,
    '${foodPrice}')`; 
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("User updated successfully!");
    });
});



}

function newRoom(roomNumber , roomPrice , phoneNumber , password){

  const connection = createDBConnection();

  const sql2 = `SELECT person_id FROM person WHERE phone = '${phoneNumber}' AND password = '${password}'`;  



  connection.query(sql2, function (err, result) {
    sth = result[0].person_id;
    const sql = `INSERT INTO room (room_number, person_id , room_price) VALUES ('${roomNumber}', '${sth}' ,
    '${roomPrice}')`;
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("User updated successfully!");
  });
  });



}

function getLastFoods(phoneNumber , password){

  const connection = createDBConnection();


  const sql2 = `SELECT person_id FROM person WHERE phone = '${phoneNumber}' AND password = '${password}'`;  

  






    return new Promise((resolve, reject) => {
      connection.query(sql2, function (err, result) {
        sth = result[0].person_id;
      const sql = `SELECT * FROM orders WHERE person_id = '${sth}'`;
      connection.query(sql, function (err, result) {
        if (err) reject(err);
        resolve(result);
        console.log(result)
        connection.end();
      });
    });

  });

  
}


  function getLastRooms(phoneNumber , password){

    const connection = createDBConnection();
  
  
    const sql2 = `SELECT person_id FROM person WHERE phone = '${phoneNumber}' AND password = '${password}'`;  
  
  
      return new Promise((resolve, reject) => {
        connection.query(sql2, function (err, result) {
          sth = result[0].person_id;
        const sql = `SELECT * FROM room WHERE person_id = '${sth}'`;
        connection.query(sql, function (err, result) {
          if (err) reject(err);
          resolve(result);
          console.log(result)
          connection.end();
        });
      });
  
    });
  
    
  }


module.exports = {createUser , checkIfUserExist , updateInfo , newOrder , newRoom , getLastFoods  , getLastRooms}