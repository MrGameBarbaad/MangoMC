/* ================= HOME BUTTON ================= */
document.getElementById("homeBtn")?.addEventListener("click", () => {
  document.querySelectorAll(".category-item")
    .forEach(item => item.classList.remove("active"));

  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= CATEGORY SELECTION ================= */
document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");
  });
});

/* ================= INFO BUTTON ================= */
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("More details coming soon!");
  });
});
