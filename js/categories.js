document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const categories = document.querySelectorAll(".category-item");

  homeBtn.addEventListener("click", () => {
    categories.forEach(item => item.classList.remove("active"));
  });

  categories.forEach(category => {
    category.addEventListener("click", () => {
      categories.forEach(item => item.classList.remove("active"));
      category.classList.add("active");
    });
  });
});
