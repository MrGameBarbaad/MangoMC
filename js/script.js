/* ================= HOME BUTTON ================= */
document.querySelector(".home-button")?.addEventListener("click", (e) => {
  e.preventDefault();

  // Remove active state from all categories
  document.querySelectorAll(".category-item")
    .forEach(item => item.classList.remove("active"));

  console.log("Home clicked — category reset");
});

/* ================= CATEGORY SELECTION ================= */
document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    console.log("Category selected:", item.dataset.category);
  });
});

/* ================= INFO BUTTON ================= */
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Package info popup coming soon!");
  });
});

/* ================= CART STATE ================= */

let cart = [];

/* Update cart count */
function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}

/* ================= ADD TO CART ================= */
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".featured-card");
    const name = card.querySelector("h4").innerText;

    cart.push(name);
    updateCartCount();

    console.log("Cart:", cart);
  });
});
