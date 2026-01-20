document.addEventListener("DOMContentLoaded", () => {
  const categoryItems = document.querySelectorAll(".category-item");
  const categorySections = document.querySelectorAll(".category-section");
  const homeInfo = document.getElementById("home-info");
  const featured = document.getElementById("featured-section");
  const homeBtn = document.getElementById("homeBtn");

  // DEFAULT STATE (HOME)
  categorySections.forEach(section => section.classList.add("hidden"));
  if (featured) featured.classList.remove("hidden");
  if (homeInfo) homeInfo.classList.remove("hidden");

  // CATEGORY CLICK
  categoryItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.dataset.category;

      // Active style
      categoryItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Hide home
      if (homeInfo) homeInfo.classList.add("hidden");

      // Hide all sections
      categorySections.forEach(section => section.classList.add("hidden"));

      // Show selected section
      const section = document.getElementById(`${target}-section`);
      if (section) section.classList.remove("hidden");
    });
  });

  // HOME BUTTON
  homeBtn.addEventListener("click", () => {
    // Remove category highlight
    categoryItems.forEach(i => i.classList.remove("active"));

    // Hide all category sections
    categorySections.forEach(section => section.classList.add("hidden"));

    // Show home + featured
    if (featured) featured.classList.remove("hidden");
    if (homeInfo) homeInfo.classList.remove("hidden");
  });
});
