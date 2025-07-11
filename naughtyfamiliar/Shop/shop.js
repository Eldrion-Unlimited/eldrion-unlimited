let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    const itemTotal = item.price * item.quantity;
    li.innerHTML = `
      ${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}
      <button onclick="removeFromCart(${index})">X</button>`;
    cartItems.appendChild(li);
    total += itemTotal;
  });

  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  alert("🧙‍♀️ Thank you for your order! Your enchanted goods will ship soon.");
  cart = [];
  updateCart();
  localStorage.removeItem("cart");
}

function filterItems(category) {
  document.querySelectorAll('.item').forEach(item => {
    item.style.display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
  });
}

// Initialize cart on load
document.addEventListener('DOMContentLoaded', updateCart);
