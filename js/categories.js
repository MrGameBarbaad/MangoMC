const categories = document.querySelectorAll(".category-item");
const featuredSection = document.querySelector(".featured-section");

const sections = {
  Ranks: document.getElementById("ranks-section"),
  Coins: document.getElementById("coins-section"),
  Dollars: document.getElementById("dollars-section"),
};

function hideAllSections() {
  featuredSection.hidden = true;
  Object.values(sections).forEach(sec => sec.hidden = true);
}

categories.forEach(category => {
  category.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    category.classList.add("active");

    const name = category.innerText.trim();

    hideAllSections();

    if (sections[name]) {
      sections[name].hidden = false;
    }
  });
});

// HOME BUTTON RESET
document.querySelector(".home-button")?.addEventListener("click", () => {
  categories.forEach(c => c.classList.remove("active"));
  hideAllSections();
  featuredSection.hidden = false;
});
