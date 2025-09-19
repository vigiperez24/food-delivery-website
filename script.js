const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

// Open menu
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

//   Close menu
function closeMenu() {
  overlay.classList.remove("active");
  mobileMenu.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    closeMenu();
  }
});

// API Cards
const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    description:
      "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, pickles, and our signature sauce on a toasted sesame bun.",
    price: "$12.99",
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    description:
      "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy crust.",
    price: "$18.99",
    rating: 4.7,
    reviews: 634,
  },
  {
    id: 3,
    name: "Caesar Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    description:
      "Fresh romaine lettuce with parmesan cheese, croutons, and creamy Caesar dressing.",
    price: "$9.99",
    rating: 4.5,
    reviews: 423,
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop",
    description:
      "Creamy fettuccine pasta with grilled chicken in rich Alfredo sauce.",
    price: "$15.99",
    rating: 4.6,
    reviews: 756,
  },
  {
    id: 5,
    name: "Fish & Chips",
    image:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop",
    description: "Beer-battered cod with crispy golden fries and tartar sauce.",
    price: "$13.99",
    rating: 4.4,
    reviews: 567,
  },
  {
    id: 6,
    name: "Chicken Tacos",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
    description:
      "Grilled chicken with fresh salsa, lettuce, and cheese in soft tortillas.",
    price: "$10.99",
    rating: 4.5,
    reviews: 891,
  },
  {
    id: 7,
    name: "BBQ Ribs",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    description:
      "Tender pork ribs glazed with smoky BBQ sauce, grilled to perfection.",
    price: "$22.99",
    rating: 4.9,
    reviews: 1089,
  },
  {
    id: 8,
    name: "Chocolate Milkshake",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    description:
      "Rich and creamy chocolate milkshake topped with whipped cream.",
    price: "$5.99",
    rating: 4.8,
    reviews: 445,
  },
  {
    id: 9,
    name: "Greek Salad",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    description:
      "Fresh vegetables with feta cheese, olives, and Mediterranean herbs.",
    price: "$11.99",
    rating: 4.3,
    reviews: 672,
  },
  {
    id: 10,
    name: "Buffalo Wings",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
    description:
      "Spicy buffalo chicken wings served with celery and blue cheese dip.",
    price: "$14.99",
    rating: 4.6,
    reviews: 723,
  },
];

// Function to generate star rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += "★";
  }

  if (hasHalfStar) {
    starsHtml += "☆";
  }

  // Fill remaining with empty stars
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsHtml += "☆";
  }

  return starsHtml;
}

// Function to load menu items
function loadMenuItems() {
  const foodGrid = document.getElementById("food-grid");
  const loadingDiv = document.querySelector(".loading-container");

  // Generate HTML for each food item
  const foodCardsHTML = foodItems
    .map(
      (item) => `<div class="food-container">
              <!-- Food Card -->
              <div class="food-card-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <!-- Title Food -->
              <div class="food-title-container">
                <div class="food-name">
                  <h1>${item.name}</h1>
                  <p>${item.description}
                  </p>
                </div>
                <!-- Price and Raitings -->
                <div class="price-raiting">
                  <h1>${item.price}</h1>
                  <div class="rating">
                    <span class="star">${generateStars(item.rating)}</span>
                    <p class="rating-text">${item.rating}(${item.reviews})</p>
                  </div>
                </div>
                <div class="btn-order">
                  <button>Order Now</button>
                </div>
              </div>
            </div>`
    )
    .join("");
  setTimeout(() => {
    loadingDiv.style.display = "none";
    foodGrid.style.display = "flex";
    foodGrid.innerHTML = foodCardsHTML;

    // Add animation to cards
    const cards = document.querySelectorAll(".food-container");

    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";

      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 1500);
}

document.addEventListener("DOMContentLoaded", loadMenuItems);
