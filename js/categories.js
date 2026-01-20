document.addEventListener("DOMContentLoaded", () => {
  const categoryItems = document.querySelectorAll(".category-item");
  const categorySections = document.querySelectorAll(".category-section");
  const homeInfo = document.getElementById("home-info");
  const homeBtn = document.getElementById("homeBtn");
  const featured = document.getElementById("featured-section");

  // CATEGORY CLICK
  categoryItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.dataset.category;

      // Active highlight
      categoryItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Hide home info
      if (homeInfo) homeInfo.classList.add("hidden");

      // Hide all sections
      categorySections.forEach(section => {
        section.classList.add("hidden");
      });

      // Show selected category
      const activeSection = document.getElementById(`${target}-section`);
      if (activeSection) {
        activeSection.classList.remove("hidden");
      }
    });
  });

  // HOME BUTTON CLICK
  homeBtn.addEventListener("click", () => {
    // Remove active highlight
    categoryItems.forEach(i => i.classList.remove("active"));

    // Hide all category sections
    categorySections.forEach(section => {
      section.classList.add("hidden");
    });

    // Show home info + featured
    if (homeInfo) homeInfo.classList.remove("hidden");
    if (featured) featured.classList.remove("hidden");
  });
});
