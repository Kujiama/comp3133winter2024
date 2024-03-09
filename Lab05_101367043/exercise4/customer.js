"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        var _this = this;
        this.greeter = function () {
            console.log("Hello, ".concat(_this.firstName, " ").concat(_this.lastName, "!"));
        };
        this.getAge = function () {
            console.log(_this.age);
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Customer;
}());
exports.Customer = Customer;
