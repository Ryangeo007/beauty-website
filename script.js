function filterCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const isVisible = category === 'all' || card.dataset.category === category;
    card.style.display = isVisible ? 'block' : 'none';
  });
  document.getElementById('brand-select').value = 'all';
}

function filterBrand(brand) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const isVisible = brand === 'all' || card.dataset.brand === brand;
    card.style.display = isVisible ? 'block' : 'none';
  });
}
