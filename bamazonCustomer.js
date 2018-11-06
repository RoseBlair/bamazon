var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
 
    password: "Rosebud1984",
    database: "bamazon"
  });

  

function showStuff() {
    connection.query("SELECT name FROM products", function (err, response, fields) {
        if (err) throw err;
            for (i=0; i < response.length; i++) {
                    console.log(response[i].name);
                }
        // console.log(response[0].name);
        // console.log(results[0].name);
    }
)};

    connection.connect(function(err) {
        if (err) throw err;
        showStuff();
        timeToBamazon();
      });

  function timeToBamazon() {
      inquirer
        .prompt({
            name: "firstQuestion",
            type: "input",
            message: "What would you like to buy?",
            // choices: results[0], results[1], results[2], results[3], results[4], results[5], results[6],
            // results[7], results[8], results[9]
            },

            {
            name: "secondQuestion",
            type: "input",
            message: "How many would you like to purchase?",

            }

        )}
  