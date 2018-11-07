//sets up dependencies

var mysql = require("mysql");
var inquirer = require("inquirer");

//connects to database

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
//start function that prompts user.
        timeToBamazon();
      });



function timeToBamazon() {
      inquirer

//lists all products.

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

    //asks user to select type of product and amount.

            message: "What is the ID of the item you would you like to buy?",
            },
            {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?"
            }

        ])

    //then does for loop through results to find correct product.

        .then(function(answer) {

            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_name === answer.choice) {
                    chosenItem = results[i];
                }
            }

    //update quantity if found.

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
    
    //determine the cost of all of the products that the user has purchased.

        calculateCost (chosenItem.amount + product[i].cost) {
            var purchaseCost = parseInt().((chosenItem.amount) * (product[i].cost));
            return purchaseCost;

    //console.log the cost of the items purchased.

        function(error) {
            if (error) throw err;
            console.log("You have purchased " + chosenItem.amount + "of " + chosenItem 
            + "\n" + " . The total cost equals " + purchaseCost);
            }

        };

    //tell user there is not enough of that item in stock.
    

        else {
            console.log("we don't have enough in stock. Please try again.")
            timeToBamazon();
        }

    }
