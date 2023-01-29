import Cart from "../ts/cart";

test('new card should be empty', () => {
  const cart = new Cart();
  cart.add({id: 1, name: '1984', price: 500});
  cart.add({id: 2, name: 'Fahrenheit 451', price: 400});
  const result = cart.getWholePrice();
  expect(result).toBe(900);
});
