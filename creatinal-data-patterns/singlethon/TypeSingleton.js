var TypeSingleton = /** @class */ (function () {
    function TypeSingleton() {
    }
    TypeSingleton.getInstance = function () {
        if (TypeSingleton._instance === null) {
            TypeSingleton._instance = new TypeSingleton();
        }
        return TypeSingleton._instance;
    };
    TypeSingleton.prototype.mainFunction = function () {
        console.log("Hello This is Executing");
    };
    TypeSingleton._instance = null;
    return TypeSingleton;
}());
var tsins1 = TypeSingleton.getInstance();
var tsins2 = TypeSingleton.getInstance();
console.log(tsins1 === tsins2);
tsins2.mainFunction();
