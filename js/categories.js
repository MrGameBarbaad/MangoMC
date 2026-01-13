document.addEventListener("DOMContentLoaded", () => {

  const homeBtn = document.getElementById("homeBtn");
  const categories = document.querySelectorAll(".category-item");

  // HOME BUTTON = RESET STORE
  homeBtn.addEventListener("click", () => {

    // remove active state from categories
    categories.forEach(item => item.classList.remove("active"));

    // scroll to top (home feel)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // CATEGORY CLICK HANDLING
  categories.forEach(category => {
    category.addEventListener("click", () => {
      categories.forEach(item => item.classList.remove("active"));
      category.classList.add("active");
    });
  });

});
