class Singleton{
    private static instance:Singleton;

    private constructor(){

    }

    public static getInstance():Singleton{
        if (!Singleton.instance){
            Singleton.instance=new Singleton()
        }
        return Singleton.instance
    }

    public mainFunction(){
        console.log("Hello This is Executing")
    }
}

const ins1=Singleton.getInstance();
const ins2=Singleton.getInstance();

console.log(ins1===ins2)
ins1.mainFunction()