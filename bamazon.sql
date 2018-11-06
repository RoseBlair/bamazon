

DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id integer(5) auto_increment not null,
    name varchar(40) not null,
    price decimal (10,2) not null,
    quantity int not null,
    primary key (id)
);

INSERT INTO products (name, price, quantity)
VALUES 
("snowglobe", 7.85, 1),
("shoes", 35.00, 70),
("sunglasses", 50.00, 20),
("television", 400.75, 30),
("hair brush", 12.50, 100),
("chair", 99.99, 60),
("radio", 35.99, 20),
("figurine", 14.25, 100),
("wax", 12.19, 50),
("book", 19.43, 100);

