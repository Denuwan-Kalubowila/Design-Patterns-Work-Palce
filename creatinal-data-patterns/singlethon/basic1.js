var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.mainFunction = function () {
        console.log("Hello This is Executing");
    };
    return Singleton;
}());
var ins1 = Singleton.getInstance();
var ins2 = Singleton.getInstance();
console.log(ins1 === ins2);
ins1.mainFunction();
