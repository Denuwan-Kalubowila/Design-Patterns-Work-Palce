interface Product {
    price():number
    description():string
}

class BaseProduct implements Product{
    private productprice:number
    private desc:string
    constructor (productprice:number,desc:string){
        this.productprice=productprice
        this.desc=desc
    }
    price(): number {
        return this.productprice
    }
    description(): string {
        return this.desc
    }
}

abstract class ProductDecorator implements Product{
    protected productDecortor:Product

    constructor(productDecorator:Product){
        this.productDecortor=productDecorator
    }

    price(): number {
        return this.productDecortor.price()
    }
    description(): string {
        return this.productDecortor.description()
    }
}

class GiftProuct extends ProductDecorator{
    constructor(giftDecorator:Product){
        super(
            giftDecorator
        )
    }
    price(): number {
        return super.price()+10
    }
    description(): string {
        return super.description() +" Gift Pack"
    }
}

class ImportedProuct extends ProductDecorator{
    constructor(importedDecorator:Product){
        super(
            importedDecorator
        )
    }
    price(): number {
        return super.price()+20
    }
    description(): string {
        return super.description() +" Imported Pack"
    }
}

let userproduct:Product =new BaseProduct(5,"This is user Product")
console.log(`Product ${userproduct.price()} and ${userproduct.description()}`)

userproduct=new GiftProuct(userproduct)
console.log(`Product ${userproduct.price()} and ${userproduct.description()}`)

userproduct=new ImportedProuct(userproduct)
console.log(`Product ${userproduct.price()} and ${userproduct.description()}`)