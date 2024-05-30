var OldApi = /** @class */ (function () {
    function OldApi(name, age) {
        this.name = name;
        this.age = age;
    }
    OldApi.prototype.printData = function () {
        return "name:".concat(this.name, ",age:").concat(this.age);
    };
    return OldApi;
}());
// class NewApi{
//     private name:string
//     private age:number
//     public constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     public printData():object{
//         return {name:this.name,age:this.age}
//     }
// }
var AdapterApi = /** @class */ (function () {
    function AdapterApi(oldapi) {
        this.oldapi = oldapi;
    }
    AdapterApi.prototype.getUserData = function () {
        var oldData = this.oldapi.printData();
        var _a = oldData.split(','), namepart = _a[0], agepart = _a[1];
        var name = namepart.split(":")[1];
        var age = parseInt(agepart.split(":")[1], 10);
        return { name: name, age: age };
    };
    return AdapterApi;
}());
var user1 = new OldApi("Denuwan", 23);
var adapter1 = new AdapterApi(user1);
console.log(user1.printData());
console.log(adapter1.getUserData());
