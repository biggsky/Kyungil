// 할인
// 디자인패턴의 전략패턴
interface Discount {
    // 함수만 선언
    getDisCountPrice(price : number) : number
}

// 가격만 수정하는 할인
class FlatDiscount implements Discount {
    private amount : number
    constructor(amount : number){
        this.amount = amount;
    }

    getDisCountPrice(price : number) : number {
        return price - this.amount
    }
}

// 할인으로 가격 수정

class PercentDiscount implements Discount {
    private amount : number;
    constructor(amount : number){
        this.amount = amount;
    }

    getDisCountPrice(price: number): number {
        return price * (1 - this.amount / 100)
    }
    // 100000 * (1 - 0.1)= 90000
}

// 가격도 깍고 할인도 깍고
class FlatPercentDiscount implements Discount{
    private flatAmount : number
    private percent : number
    constructor (flatAmount : number, percent : number){
        this.flatAmount = flatAmount;
        this.percent = percent;
    }
    // 1000, 10

    getDisCountPrice(price: number): number {
        const flatDiscountAmount = price - this.flatAmount;
        return flatDiscountAmount * (1 - this.percent / 100);
    }
    // 2000 - 1000 = 1000
    // 1000 * (1 - 10 /100) = 1000 * (1- 0.1) = 900
}

// 할인의 기능에 대한 유지보수가 좋아진다.
// 클래스 하나만 더 추가하면 되는것.

class Products {
    private name : string
    private price : number
    constructor (name : string, price : number){
        this.name = name;
        this.price = price
    }

    // getName () : string{
    //     return this.name
    // }

    getPrice() : number{
        return this.price
    }
}

class ProductDiscount {
    private product : Products
    private discount : Discount
    constructor(product : Products, discount : Discount){
        this.product = product;
        this.discount = discount;
    }

    getPrice() : void {
        console.log("왓?", this.discount.getDisCountPrice(this.product.getPrice()));
    }
}
const _product = new Products("mac", 100000);
const _product2 = new Products("window", 2000);

const productDisCount = new PercentDiscount(10);
// const productDisCount2 = new FlatDiscount(1000);
const productDiscount3 = new FlatPercentDiscount(1000, 10);

const productWithDiscount = new ProductDiscount(_product, productDisCount);
productWithDiscount.getPrice();
// 100000

const productWithDiscount2 = new ProductDiscount(_product2, productDiscount3);
productWithDiscount2.getPrice();
// 2000
