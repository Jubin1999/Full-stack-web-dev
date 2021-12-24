class Product{
    constructor(itemName){
        console.log('Passed by Furniture' + itemName);
        this.itemName = itemName;
        // this.price = price;
        // this.discount = discount;
        // this.productCode = productCode;
    }

    getItemName(){
        return this.itemName + " is a product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);
    }

    getItemName(){
        return this.itemName + " is a Furniture"
    }
}


//let pencil = new Product('pencil');
let chair = new Furniture('chair', 499, 15, 'C10')

// const Product1 = class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDiscountValue(){
//         return this.discount
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// };

// let chair = new Product1('chair', 499, 15, 'C10')