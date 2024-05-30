interface Coffee {
    cost():number
    description():string
}

class SimpleCoffee implements Coffee{
    public cost():number{
        return 5
    }
    public description(): string {
        return "Simple coffee"
    }
}

abstract class CoffeeDecorator implements Coffee{
    protected decortedCoffee:Coffee

    constructor(decoratedCoffee:Coffee){
        this.decortedCoffee=decoratedCoffee
    }
    cost():number{
        return this.decortedCoffee.cost()
    }
    description(): string {
        return this.decortedCoffee.description()
    }

}

class MilkCoffee extends CoffeeDecorator{
    constructor(decoratedCoffe:Coffee){
        super(decoratedCoffe)
    }
    cost(): number {
        return super.cost()+1
    }
    description(): string {
        return super.description()+"Milk"
    }
}

let myCoffee:Coffee = new SimpleCoffee()
console.log(`--Simple Coffee--\nPrice: ${myCoffee.cost()} $\n Description: ${myCoffee.description()}`)

myCoffee= new MilkCoffee(myCoffee)
console.log(`--Simple Coffee with Milk--\nPrice: ${myCoffee.cost()} $\n Description: ${myCoffee.description()}`)
