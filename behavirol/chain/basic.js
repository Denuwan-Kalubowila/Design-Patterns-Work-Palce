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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
        this.nextHandler = null;
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var FirstSupport = /** @class */ (function (_super) {
    __extends(FirstSupport, _super);
    function FirstSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstSupport.prototype.handle = function (req) {
        if (req === "Simple") {
            return "First Support: I will be handle ".concat(req);
        }
        return _super.prototype.handle.call(this, req);
    };
    return FirstSupport;
}(AbstractHandler));
var SecondSupport = /** @class */ (function (_super) {
    __extends(SecondSupport, _super);
    function SecondSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondSupport.prototype.handle = function (req) {
        if (req === "Middle") {
            return "Second Support: I will be handle ".concat(req);
        }
        return _super.prototype.handle.call(this, req);
    };
    return SecondSupport;
}(AbstractHandler));
var ThirdSupport = /** @class */ (function (_super) {
    __extends(ThirdSupport, _super);
    function ThirdSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThirdSupport.prototype.handle = function (req) {
        if (req === "Hard") {
            return "Third Support: I will be handle ".concat(req);
        }
        return _super.prototype.handle.call(this, req);
    };
    return ThirdSupport;
}(AbstractHandler));
function clientCode(handler) {
    var issues = ["Simple", "Middle", "Hard", "Simple", "Simple", "a", "b", "Middle", "Middle", "Middle"];
    for (var _i = 0, issues_1 = issues; _i < issues_1.length; _i++) {
        var issue = issues_1[_i];
        var res = handler.handle(issue);
        if (res) {
            console.log(res);
        }
        else {
            console.log("Not handle");
        }
    }
}
var first = new FirstSupport();
var second = new SecondSupport();
var third = new ThirdSupport();
first.setNext(second).setNext(third);
clientCode(first);
console.log("----------------------------------------------------------");
clientCode(second);
