var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5;
    };
    SimpleCoffee.prototype.description = function () {
        return "Simple coffee";
    };
    return SimpleCoffee;
}());
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(decoratedCoffee) {
        this.decortedCoffee = decoratedCoffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.decortedCoffee.cost();
    };
    CoffeeDecorator.prototype.description = function () {
        return this.decortedCoffee.description();
    };
    return CoffeeDecorator;
}());
var MilkCoffee = /** @class */ (function (_super) {
    __extends(MilkCoffee, _super);
    function MilkCoffee(decoratedCoffe) {
        return _super.call(this, decoratedCoffe) || this;
    }
    MilkCoffee.prototype.cost = function () {
        return _super.prototype.cost.call(this) + 1;
    };
    MilkCoffee.prototype.description = function () {
        return _super.prototype.description.call(this) + "Milk";
    };
    return MilkCoffee;
}(CoffeeDecorator));
var myCoffee = new SimpleCoffee();
console.log("--Simple Coffee--\nPrice: ".concat(myCoffee.cost(), " $\n Description: ").concat(myCoffee.description()));
myCoffee = new MilkCoffee(myCoffee);
console.log("--Simple Coffee with Milk--\nPrice: ".concat(myCoffee.cost(), " $\n Description: ").concat(myCoffee.description()));
