document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 25px rgba(0,255,170,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
