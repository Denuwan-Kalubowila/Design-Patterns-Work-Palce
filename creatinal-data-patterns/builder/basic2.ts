class Computer{
    public cpu:string
    public ram:string
    public gpu:string

    public showData():void{
        console.log(`Computer With ${this.cpu} CPU ,${this.ram} RAM and ${this.gpu}`)
    }
}

interface ComputerBuilder{
    cpuBuilder():void
    ramBuilder():void
    gpuBuilder():void
}

class GamingComputer implements ComputerBuilder{
    private gameComputer:Computer

    public constructor(){
        this.gameComputer=new Computer
    }

    public cpuBuilder(): void {
        this.gameComputer.cpu="I9"
        console.log("cpu Add")
    }
    public ramBuilder(): void {
        this.gameComputer.ram="32GB"
        console.log("ram Add")
    }
    public gpuBuilder(): void {
        this.gameComputer.gpu="RTX-4500"
        console.log("gpu Add")
    }
    public getComputer():Computer{
        return this.gameComputer
    }

}
class OfficeComputer implements ComputerBuilder{
    private officeComputer:Computer

    public constructor(){
        this.officeComputer=new Computer
    }
    
    public cpuBuilder(): void {
        this.officeComputer.cpu="I5"
        console.log("cpu Add")
    }
    public ramBuilder(): void {
        this.officeComputer.ram="8GB"
        console.log("ram Add")
    }
    public gpuBuilder(): void {
        this.officeComputer.gpu="No"
        console.log("gpu Add")
    }
    public getComputer():Computer{
        return this.officeComputer
    }
}

class ComputerDirector {
    private builder:ComputerBuilder

    public setComputerBuilder(builder:ComputerBuilder):void{
        this.builder=builder
    }
    
    public constructComputer():void{
        this.builder.cpuBuilder()
        this.builder.ramBuilder()
        this.builder.gpuBuilder()
    }
}

const computerMain=()=>{
    const computerDirector=new ComputerDirector()

    const game=new GamingComputer()
    computerDirector.setComputerBuilder(game)
    computerDirector.constructComputer()
    const gamecomputer:Computer= game.getComputer()
    gamecomputer.showData()

    console.log("-------------------------------------")

    const office= new OfficeComputer()
    computerDirector.setComputerBuilder(office)
    computerDirector.constructComputer()
    const officecomputer:Computer= office.getComputer()
    officecomputer.showData()

}
computerMain()