interface Handler{
    setNext(handler:Handler):Handler,
    handle(req:string):string|null
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class FirstSupport extends AbstractHandler{
    public handle(req: string): string | null {
        if (req === "Simple"){
            return `First Support: I will be handle ${req}`
        }
        return super.handle(req)
    }
}
class SecondSupport extends AbstractHandler{
    public handle(req: string): string | null {
        if (req === "Middle"){
            return `Second Support: I will be handle ${req}`
        }
        return super.handle(req)
    }
}
class ThirdSupport extends AbstractHandler{
    public handle(req: string): string | null {
        if (req === "Hard"){
            return `Third Support: I will be handle ${req}`
        }
        return super.handle(req)
    }
} 

function clientCode(handler:Handler){
    const issues=[ "Simple","Middle","Hard","Simple","Simple","a","b","Middle","Middle","Middle"]

    for (const issue of issues){
        const res= handler.handle(issue)
        if (res){
            console.log(res)
        }else{
            console.log("Not handle")
        }
    }
}

const first=new FirstSupport();
const second= new SecondSupport();
const third =new ThirdSupport();

first.setNext(second).setNext(third)
clientCode(first)
console.log("----------------------------------------------------------")
clientCode(second)
