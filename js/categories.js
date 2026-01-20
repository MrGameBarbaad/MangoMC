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
    section.classList.add("hidden");
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
    const target = item.dataset.category; // ranks / coins / dollars

    // reset UI
    clearCategorySelection();
    hideAllCategories();

    // hide home content
    homeInfo.classList.add("hidden");
    featured.classList.add("hidden");

    // activate sidebar
    item.classList.add("active");

    // show correct category
    const section = document.getElementById(`${target}-section`);
    if (section) {
      section.classList.remove("hidden");
    }
  });
});

/* -----------------------------
   HOME BUTTON
------------------------------ */

homeBtn.addEventListener("click", () => {
  clearCategorySelection();
  hideAllCategories();

  featured.classList.remove("hidden");
  homeInfo.classList.remove("hidden");
});

// Hide categories on first load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category-section").forEach(section => {
    section.classList.add("hidden");
  });
});
