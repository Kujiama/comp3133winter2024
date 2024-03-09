var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        var _this = this;
        this.greeter = function () {
            console.log("Hello, ".concat(_this.firstName, " ").concat(_this.lastName, "!"));
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("England", "Pelenio");
customer.greeter(); // Hello, England Pelenio!
