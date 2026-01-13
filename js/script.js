/* ================= HOME BUTTON ================= */
document.querySelector(".home-button")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/";
});

/* ================= CATEGORY SELECTION ================= */
document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    console.log("Category selected:", item.innerText.trim());
    // later: load category products here
  });
});

/* ================= INFO BUTTON ================= */
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Package info popup coming soon!");
  });
});

/* ================= ADD TO CART ================= */
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart (Tebex integration next)");
  });
});
