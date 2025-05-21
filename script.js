function filterProducts() {
  const selectedBrand = document.getElementById("brand-filter").value;
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const brand = card.dataset.brand;
    if (selectedBrand === "all" || brand === selectedBrand) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to your bag!`);
}

function showCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your bag is empty.");
  } else {
    alert("Your bag:\n" + cart.join("\n"));
  }
}
