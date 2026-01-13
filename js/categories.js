document.addEventListener("DOMContentLoaded", () => {

  const homeBtn = document.getElementById("homeBtn");
  const categories = document.querySelectorAll(".category-item");

  // HOME BUTTON CLICK
  homeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop page reload

    // remove active from all categories
    categories.forEach(cat => cat.classList.remove("active"));

    // optional: clear store content
    const storeContent = document.querySelector(".store-content");
    if (storeContent) {
      storeContent.scrollTop = 0;
    }
  });

  // CATEGORY CLICK
  categories.forEach(category => {
    category.addEventListener("click", () => {
      categories.forEach(c => c.classList.remove("active"));
      category.classList.add("active");
    });
  });

});
