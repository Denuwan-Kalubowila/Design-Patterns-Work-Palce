var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.show = function () {
        console.log("Houser with foundation ".concat(this.foundation, " struct ").concat(this.struct, " roof ").concat(this.roof, " intirior ").concat(this.interior));
    };
    return House;
}());
var ConcreteHouseBuilder = /** @class */ (function () {
    function ConcreteHouseBuilder() {
        this.house = new House;
    }
    ConcreteHouseBuilder.prototype.buildFoundation = function () {
        this.house.foundation = "Concrete brick and stone";
        console.log("Foundation complete");
    };
    ConcreteHouseBuilder.prototype.buildStructure = function () {
        this.house.struct = "Wood and bricks";
        console.log("Structure complete");
    };
    ConcreteHouseBuilder.prototype.buildRoof = function () {
        this.house.roof = "Concrete brick and stone";
        console.log("Foundation complete");
    };
    ConcreteHouseBuilder.prototype.buildInterior = function () {
        this.house.interior = 'Drywall and paint';
        console.log('Interior complete.');
    };
    ConcreteHouseBuilder.prototype.getHouse = function () {
        return this.house;
    };
    return ConcreteHouseBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setbuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.constructHouse = function () {
        this.builder.buildFoundation();
        this.builder.buildStructure();
        this.builder.buildRoof();
        this.builder.buildInterior();
    };
    return Director;
}());
var main = function () {
    var director = new Director();
    var builder = new ConcreteHouseBuilder();
    director.setbuilder(builder);
    director.constructHouse();
    var house = builder.getHouse();
    house.show();
};
main();
