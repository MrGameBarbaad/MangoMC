const categories = document.querySelectorAll(".category-item");
const featured = document.getElementById("featured-section");
const homeInfo = document.getElementById("home-info");
const homeBtn = document.getElementById("homeBtn");
const categoryItems = document.querySelectorAll(".category-item");

const sections = {
  Ranks: document.getElementById("ranks-section"),
  Coins: document.getElementById("coins-section"),
  Dollars: document.getElementById("dollars-section"),
};

function hideAll() {
  featuredSection.hidden = true;
  homeInfo.hidden = true;
  Object.values(sections).forEach(sec => sec.hidden = true);
}

categories.forEach(category => {
  category.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    category.classList.add("active");

    const name = category.innerText.trim();

    hideAll();

    if (sections[name]) {
      sections[name].hidden = false;
    }
  });
});

/* HOME BUTTON */
document.getElementById("homeBtn").addEventListener("click", () => {
  categories.forEach(c => c.classList.remove("active"));
  hideAll();
  featuredSection.hidden = false;
  homeInfo.hidden = false;
});

homeBtn.addEventListener("click", () => {
  categories.forEach(section => {
    section.classList.remove("active"};
});

  categoryItems.forEach(item => {
    item.classList.remove("active");
});

  homeInfo.style.display = "block";
  featured.style.display = "block";
});
