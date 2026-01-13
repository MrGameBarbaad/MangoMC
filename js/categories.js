const items = document.querySelectorAll(".category-item");
const homeBtn = document.getElementById("homeBtn");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

homeBtn.addEventListener("click", e => {
  e.preventDefault();
  items.forEach(i => i.classList.remove("active"));
});
