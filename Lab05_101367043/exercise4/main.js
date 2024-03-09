"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer('England', 'Pelenio', 21);
customer.greeter(); // Hello England Pelenio!
customer.getAge(); // 21
