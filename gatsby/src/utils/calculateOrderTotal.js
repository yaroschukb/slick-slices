import calculatePizzaPrice from './calcuatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((acc, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return acc + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
