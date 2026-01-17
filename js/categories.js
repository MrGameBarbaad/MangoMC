const categoryItems = document.querySelectorAll(".category-item");
const homeBtn = document.getElementById("homeBtn");

const homeInfo = document.getElementById("home-info");
const featured = document.getElementById("featured-section");

const categorySections = document.querySelectorAll(".category-section");

/* -----------------------------
   HELPERS
------------------------------ */

function hideAllCategories() {
  categorySections.forEach(section => {
    section.classList.remove("active");
  });
}

function clearCategorySelection() {
  categoryItems.forEach(item => {
    item.classList.remove("active");
  });
}

/* -----------------------------
   CATEGORY CLICK
------------------------------ */

categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.dataset.category; // ranks, coins, dollars

    // UI reset
    clearCategorySelection();
    hideAllCategories();

    // hide home content
    homeInfo.style.display = "none";
    featured.style.display = "none";

    // activate sidebar
    item.classList.add("active");

    // show correct section
    const section = document.getElementById(`${target}-section`);
    if (section) {
      section.classList.add("active");
    }
  });
});

/* -----------------------------
   HOME BUTTON
------------------------------ */

homeBtn.addEventListener("click", () => {
  clearCategorySelection();
  hideAllCategories();

  homeInfo.style.display = "block";
  featured.style.display = "block";
});
