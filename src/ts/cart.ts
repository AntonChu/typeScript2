import Buyable from './buyable';

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getWholePrice(): number {
    return this.items. reduce ((acc: number, item: Buyable) => acc + item.price, 0);
  }

  getDiscountPrice(discount: number): number {
    const sum = this.getWholePrice();
    return sum - sum * (discount / 100);
  }
}
