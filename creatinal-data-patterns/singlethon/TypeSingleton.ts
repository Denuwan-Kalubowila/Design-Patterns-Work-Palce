class TypeSingleton{
    private static _instance:TypeSingleton | null=null;

    private constructor(){

    }

    public static getInstance():TypeSingleton{
        if (TypeSingleton._instance===null){
            TypeSingleton._instance=new TypeSingleton()
        }
        return TypeSingleton._instance
    }

    public mainFunction(): void{
        console.log("Hello This is Executing")
    }
}

const tsins1=TypeSingleton.getInstance();
const tsins2=TypeSingleton.getInstance();

console.log(tsins1===tsins2)
tsins2.mainFunction()
