/**
 * Get message about the purchase
 * @param {number} quantity - quantity of droids
 * @param {number} pricePerDroid - price per droid
 * @returns {string} message about the purchase
 */
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  let message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return message;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
