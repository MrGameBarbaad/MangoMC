document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category-item");
  const sections = document.querySelectorAll(".category-section");
  const homeInfo = document.getElementById("home-info");
  const featured = document.getElementById("featured-section");
  const homeBtn = document.getElementById("homeBtn");

  // Hide all category sections on load
  sections.forEach(section => section.style.display = "none");

  // CATEGORY CLICK
  categories.forEach(item => {
    item.addEventListener("click", () => {
      const category = item.dataset.category; // ← THIS IS THE FIX

      // Hide home content
      homeInfo.style.display = "none";
      featured.style.display = "none";

      // Hide all category sections
      sections.forEach(section => {
        section.style.display = "none";
      });

      // Show selected category
      const active = document.getElementById(`${category}-section`);
      if (active) active.style.display = "block";
    });
  });

  // HOME BUTTON
  homeBtn.addEventListener("click", () => {
    sections.forEach(section => section.style.display = "none");
    homeInfo.style.display = "block";
    featured.style.display = "block";
  });
});
