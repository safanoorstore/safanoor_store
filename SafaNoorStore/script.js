// Simple Add to Cart system
let cart = [];

function addToCart(productName, price) {
  cart.push({name: productName, price: price});
  alert(productName + " added to cart!");

  // Track add to cart event in Facebook Pixel
  fbq('track', 'AddToCart', {
    content_name: productName,
    value: price,
    currency: 'BDT'
  });
  console.log(cart);
}
