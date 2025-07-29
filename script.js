const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1500,
    image: "images/headphones.jpeg"
  },
  {
    id: 2,
    name: "Heels",
    price: 1000,
    image: "images/women footwear.jpg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1200,
    image: "images/speaker.jpeg"
  },
   {
    id: 4,
    name: "Shoes",
    price: 950,
    image: "images/footwear.jpg"
  },
   {
    id: 5,
    name: "Wall Art Decor",
    price: 400,
    image: "images/home-decor.jpg"
  },
   {
    id: 6,
    name: "Lipstick",
    price: 350,
    image: "images/lipstick.jpg"
  }
];


let cartCount = 0;

function loadProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}
window.onload = loadProducts;


/*Categories section*/ 
// Select all category cards
const categoryCards = document.querySelectorAll('.category-card');

// Add click event listeners
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');

    const targetPage=`${category.toLowerCase().replace(/\s+/g, '-')}.html`;
    window.open(targetPage, '_blank');

    // Option 1: Alert the category (for demo)
    // alert(`You clicked on ${category} category!`);

  });
});

