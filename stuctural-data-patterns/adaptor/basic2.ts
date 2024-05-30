class OldApi{
    private name:string
    private age:number

    public constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    public printData():string{
        return `name:${this.name},age:${this.age}`
    }
}

interface NewApi{
    getUserData():{name:string,age:number}
}

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

class AdapterApi implements NewApi{
    private oldapi:OldApi

    public constructor(oldapi:OldApi){
        this.oldapi=oldapi
    }

    public getUserData(): { name: string; age: number } {
        const oldData= this.oldapi.printData()
        const [namepart,agepart]=oldData.split(',')

        const name=namepart.split(":")[1]
        const age=parseInt(agepart.split(":")[1],10)

        return {name:name,age:age}
    }
}

const user1=new OldApi("Denuwan",23)
const adapter1= new AdapterApi(user1)

console.log(user1.printData())
console.log(adapter1.getUserData())