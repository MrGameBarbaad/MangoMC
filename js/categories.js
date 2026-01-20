const categoryItems = document.querySelectorAll(".category-item");
const homeBtn = document.getElementById("homeBtn");

const homeInfo = document.getElementById("home-info");
const featured = document.getElementById("featured-section");
const categorySections = document.querySelectorAll(".category-section");

/* Helpers */
function hideAllSections() {
  categorySections.forEach(sec => sec.classList.remove("active"));
}

function clearActiveCategories() {
  categoryItems.forEach(item => item.classList.remove("active"));
}

/* Category click */
categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.dataset.category;

    clearActiveCategories();
    hideAllSections();

    homeInfo.style.display = "none";
    featured.style.display = "none";

    item.classList.add("active");

    const section = document.getElementById(`${target}-section`);
    if (section) section.classList.add("active");
  });
});

/* Home button */
homeBtn.addEventListener("click", () => {
  clearActiveCategories();
  hideAllSections();

  homeInfo.style.display = "block";
  featured.style.display = "block";
});
