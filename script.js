const myNumber = "254785321343";
let cart = [];

// Cart functions
function orderWhatsApp(food, price) {
  cart.push({ food, price });
  alert(`${food} added to cart! 🛒`);
  updateCart();
}

function checkoutCart() {
  if (cart.length === 0) { alert("Your cart is empty!"); return; }
  let message = "Hi! I would like to order:\n";
  let total = 0;
  cart.forEach(item => { message += `- ${item.food}: KES ${item.price}\n`; total += item.price; });
  message += `Total: KES ${total}`;
  window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function openWhatsApp(message) {
  window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");
  if (!cartDiv) return;
  if (cart.length === 0) { cartDiv.innerHTML = "<p>Your cart is empty 😢</p>"; cartTotalDiv.style.display="none"; }
  else {
    let html=""; let total=0;
    cart.forEach(item => { html+=`<p>${item.food} - KES ${item.price}</p>`; total+=item.price; });
    cartDiv.innerHTML=html; document.getElementById("totalAmount").innerText=total;
    cartTotalDiv.style.display="block";
  }
}

// Dark Mode
function toggleDarkMode() { document.body.classList.toggle("dark-mode"); }

// Carousel
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-img");
if(slides.length > 0){
  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex+1)%slides.length;
    slides[currentIndex].classList.add("active");
  }, 3000);
}
