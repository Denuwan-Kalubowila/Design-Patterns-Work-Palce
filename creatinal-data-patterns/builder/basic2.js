var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.showData = function () {
        console.log("Computer With ".concat(this.cpu, " CPU ,").concat(this.ram, " RAM and ").concat(this.gpu));
    };
    return Computer;
}());
var GamingComputer = /** @class */ (function () {
    function GamingComputer() {
        this.gameComputer = new Computer;
    }
    GamingComputer.prototype.cpuBuilder = function () {
        this.gameComputer.cpu = "I9";
        console.log("cpu Add");
    };
    GamingComputer.prototype.ramBuilder = function () {
        this.gameComputer.ram = "32GB";
        console.log("ram Add");
    };
    GamingComputer.prototype.gpuBuilder = function () {
        this.gameComputer.gpu = "RTX-4500";
        console.log("gpu Add");
    };
    GamingComputer.prototype.getComputer = function () {
        return this.gameComputer;
    };
    return GamingComputer;
}());
var OfficeComputer = /** @class */ (function () {
    function OfficeComputer() {
        this.officeComputer = new Computer;
    }
    OfficeComputer.prototype.cpuBuilder = function () {
        this.officeComputer.cpu = "I5";
        console.log("cpu Add");
    };
    OfficeComputer.prototype.ramBuilder = function () {
        this.officeComputer.ram = "8GB";
        console.log("ram Add");
    };
    OfficeComputer.prototype.gpuBuilder = function () {
        this.officeComputer.gpu = "No";
        console.log("gpu Add");
    };
    OfficeComputer.prototype.getComputer = function () {
        return this.officeComputer;
    };
    return OfficeComputer;
}());
var ComputerDirector = /** @class */ (function () {
    function ComputerDirector() {
    }
    ComputerDirector.prototype.setComputerBuilder = function (builder) {
        this.builder = builder;
    };
    ComputerDirector.prototype.constructComputer = function () {
        this.builder.cpuBuilder();
        this.builder.ramBuilder();
        this.builder.gpuBuilder();
    };
    return ComputerDirector;
}());
var computerMain = function () {
    var computerDirector = new ComputerDirector();
    var game = new GamingComputer();
    computerDirector.setComputerBuilder(game);
    computerDirector.constructComputer();
    var gamecomputer = game.getComputer();
    gamecomputer.showData();
    console.log("-------------------------------------");
    var office = new OfficeComputer();
    computerDirector.setComputerBuilder(office);
    computerDirector.constructComputer();
    var officecomputer = office.getComputer();
    officecomputer.showData();
};
computerMain();
