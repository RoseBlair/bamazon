var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
 
    password: "Rosebud1984",
    database: "bamazon"
  });

//connect to the mysql and server database

    connection.connect(function(err) {
        if (err) throw err;
        timeToBamazon();
      });


function timeToBamazon() {
      inquirer
        .prompt([
            {
            name: "choice",
            type: "rawlist",
            choices: function(response) { 
                    var list = [];
                    for (i=0; i < response.length; i++) { 
                    list.push(response[i].name);
                    console.log(list);
                    }
                return list;
                }
            },
            {
    
            message: "What is the ID of the item you would you like to buy?",
            },
            {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?"
            }

        ])
        .then(function(answer) {

            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_name === answer.choice) {
                    chosenItem = results[i];
                }
            }

        if (chosenItem.amount <= item.quantity) {
            connection.query(
                "UPDATE products SET ? WHERE ?"
            [
                {
                   quantity: quantity-chosenItem.amount
                },
                {
                    id: chosenItem.Id
                }
            ],

        calculateCost (chosenItem.amount + product[i].cost) {
            var purchaseCost = parseInt().((chosenItem.amount) * (product[i].cost));
            return purchaseCost;

        function(error) {
            if (error) throw err;
            console.log("You have purchased " + chosenItem.amount + "of " + chosenItem 
            + "\n" + " . The total cost equals " + purchaseCost);
            }

        } 

        else {
            console.log("we don't have enough in stock. Please try again.")
            timeToBamazon();
        }

    }