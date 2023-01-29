import Buyable from './buyable';

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getWholePrice(): number {
    const pricesArr: any = [];
    [...this.items].forEach(el => pricesArr.push(el.price));
    return pricesArr.reduce((acc: number, item: number) => acc + item, 0);
  }

  getDiscountPrice(discount: number): number {
    const sum: number = this.getWholePrice();
    return sum - sum * (discount / 100);
  }
}
