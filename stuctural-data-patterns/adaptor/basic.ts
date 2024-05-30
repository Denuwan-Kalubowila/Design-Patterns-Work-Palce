class Target {
    public request():string{
        return "Target: The default target\'s behavior."
    }
}

class Adaptee{
    public specialRequest():string{
        return ".eetpadA eht fo roivaheb laicepS"
    }
}

class Adapter extends Target{
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specialRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }

}

const clientCode=(tar:Target)=>{
    console.log(tar.request())
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specialRequest()}`);

console.log('');

console.log("I can work with Adaptee")
const adapter= new Adapter(adaptee)
clientCode(adapter)