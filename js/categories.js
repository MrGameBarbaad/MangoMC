const categoryItems = document.querySelectorAll(".category-item");
const sections = document.querySelectorAll(".category-section");

// Show HOME by default
sections.forEach(section => section.classList.remove("active", "show"));

function showCategory(id) {
  sections.forEach(section => {
    section.classList.remove("show");

    setTimeout(() => {
      section.classList.remove("active");
    }, 200);
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add("active");

  setTimeout(() => {
    target.classList.add("show");
  }, 20);
}

// Sidebar click
categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    categoryItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const category = item.dataset.category;
    showCategory(`${category}-section`);
  });
});

const homeInfo = document.getElementById("home-info");
const homeBtn = document.getElementById("homeBtn");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    categoryItems.forEach(i => i.classList.remove("active"));

    sections.forEach(section => {
      section.classList.remove("show");
      setTimeout(() => section.classList.remove("active"), 200);
    });

    homeInfo.style.display = "block";
    homeInfo.style.opacity = "0";

    setTimeout(() => {
      homeInfo.style.opacity = "1";
    }, 20);
  });
}
