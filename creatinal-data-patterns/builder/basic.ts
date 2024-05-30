class House{
    public foundation:string
    public struct:string
    public roof:string
    public interior:string

    public show():void{
        console.log(`Houser with foundation ${this.foundation} struct ${this.struct} roof ${this.roof} intirior ${this.interior}`)
    }
}

interface HouseBuilder{
    buildFoundation():void
    buildStructure():void
    buildRoof():void
    buildInterior():void
    getHouse():House
}

class ConcreteHouseBuilder implements HouseBuilder{
    private house:House

    constructor(){
        this.house=new House
    }
    public buildFoundation(): void {
        this.house.foundation="Concrete brick and stone"
        console.log("Foundation complete")
    }
    public buildStructure(): void {
        this.house.struct="Wood and bricks"
        console.log("Structure complete")
    }
    public buildRoof(): void {
        this.house.roof="Concrete brick and stone"
        console.log("Foundation complete")
    }
    public buildInterior(): void {
        this.house.interior = 'Drywall and paint';
        console.log('Interior complete.');
    }
     public getHouse(): House {
         return this.house
     }
}

class Director{
    private builder:HouseBuilder

    public setbuilder(builder:HouseBuilder):void{
        this.builder=builder
    }
    public constructHouse():void{
        this.builder.buildFoundation()
        this.builder.buildStructure()
        this.builder.buildRoof()
        this.builder.buildInterior()
    }

}

const main =()=>{
    const director=new Director()
    const builder=new ConcreteHouseBuilder()

    director.setbuilder(builder)
    director.constructHouse()

    const house:House=builder.getHouse()
    house.show()
}

main()
