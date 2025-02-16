'use strict';

function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;

  return `You ordered ${country} droids worth ${totalPrice} credits!`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
console.log(getShippingMessage("Eskisehir", 240, 30)); // "Shipping to Eskisehir will cost 270 credits"
