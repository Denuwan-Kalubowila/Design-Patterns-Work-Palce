var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseProduct = /** @class */ (function () {
    function BaseProduct(productprice, desc) {
        this.productprice = productprice;
        this.desc = desc;
    }
    BaseProduct.prototype.price = function () {
        return this.productprice;
    };
    BaseProduct.prototype.description = function () {
        return this.desc;
    };
    return BaseProduct;
}());
var ProductDecorator = /** @class */ (function () {
    function ProductDecorator(productDecorator) {
        this.productDecortor = productDecorator;
    }
    ProductDecorator.prototype.price = function () {
        return this.productDecortor.price();
    };
    ProductDecorator.prototype.description = function () {
        return this.productDecortor.description();
    };
    return ProductDecorator;
}());
var GiftProuct = /** @class */ (function (_super) {
    __extends(GiftProuct, _super);
    function GiftProuct(giftDecorator) {
        return _super.call(this, giftDecorator) || this;
    }
    GiftProuct.prototype.price = function () {
        return _super.prototype.price.call(this) + 10;
    };
    GiftProuct.prototype.description = function () {
        return _super.prototype.description.call(this) + " Gift Pack";
    };
    return GiftProuct;
}(ProductDecorator));
var ImportedProuct = /** @class */ (function (_super) {
    __extends(ImportedProuct, _super);
    function ImportedProuct(importedDecorator) {
        return _super.call(this, importedDecorator) || this;
    }
    ImportedProuct.prototype.price = function () {
        return _super.prototype.price.call(this) + 20;
    };
    ImportedProuct.prototype.description = function () {
        return _super.prototype.description.call(this) + " Imported Pack";
    };
    return ImportedProuct;
}(ProductDecorator));
var userproduct = new BaseProduct(5, "This is user Product");
console.log("Product ".concat(userproduct.price(), " and ").concat(userproduct.description()));
userproduct = new GiftProuct(userproduct);
console.log("Product ".concat(userproduct.price(), " and ").concat(userproduct.description()));
userproduct = new ImportedProuct(userproduct);
console.log("Product ".concat(userproduct.price(), " and ").concat(userproduct.description()));
