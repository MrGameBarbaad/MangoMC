const categoryItems = document.querySelectorAll(".category-item");
const homeBtn = document.getElementById("homeBtn");

const homeInfo = document.getElementById("home-info");
const featured = document.getElementById("featured-section");

const categorySections = document.querySelectorAll(".category-section");

/* -----------------------------
   HELPERS
------------------------------ */

function hideAllSections() {
  categorySections.forEach(section => {
    section.hidden = true;
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
    const target = item.dataset.category; // example: "ranks"

    // reset UI
    clearCategorySelection();
    hideAllSections();

    // hide home content
    homeInfo.hidden = true;
    featured.hidden = true;

    // activate sidebar item
    item.classList.add("active");

    // show correct category section
    const section = document.getElementById(`${target}-section`);
    if (section) {
      section.hidden = false;
    }
  });
});

/* -----------------------------
   HOME BUTTON
------------------------------ */

homeBtn.addEventListener("click", () => {
  clearCategorySelection();
  hideAllSections();

  // show home content
  homeInfo.hidden = false;
  featured.hidden = false;
});
