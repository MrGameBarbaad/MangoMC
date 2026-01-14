/* ================= HOME BUTTON ================= */
document.querySelector(".home-button")?.addEventListener("click", (e) => {
  e.preventDefault();

  // Remove active state from all categories
  document.querySelectorAll(".category-item")
    .forEach(item => item.classList.remove("active"));

  console.log("Home clicked — category reset");
});

/* ================= CATEGORY SELECTION ================= */
document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    console.log("Category selected:", item.dataset.category);
  });
});

/* ================= INFO BUTTON ================= */
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Package info popup coming soon!");
  });
});

/* ELEMENTS */
const overlay = document.getElementById("overlay");
const loginModal = document.getElementById("loginModal");
const cartModal = document.getElementById("cartModal");
const usernameInput = document.getElementById("usernameInput");
const skinPreview = document.getElementById("skinPreview");
const bedrockToggle = document.getElementById("bedrockToggle");

/* CART BUTTON */
document.getElementById("cartBtn").onclick = () => {
  overlay.classList.remove("hidden");

  if (!user) {
    loginModal.classList.remove("hidden");
    cartModal.classList.add("hidden");
  } else {
    showCart();
  }
};

/* LIVE SKIN */
usernameInput.oninput = () => {
  skinPreview.src = `https://mc-heads.net/avatar/${usernameInput.value || "Steve"}/64`;
};

/* BEDROCK TOGGLE */
bedrockToggle.onclick = () => {
  bedrock = !bedrock;
  bedrockToggle.textContent = bedrock ? "Yes" : "No";
  bedrockToggle.className = bedrock ? "on" : "off";
};

/* LOGIN */
document.getElementById("loginBtn").onclick = () => {
  let name = usernameInput.value.trim();
  if (!name) return;

  if (bedrock) name = "." + name;

  user = { name };
  localStorage.setItem("user", JSON.stringify(user));

  loginModal.classList.add("hidden");
  showCart();
};

/* SHOW CART */
function showCart() {
  cartModal.classList.remove("hidden");
  document.getElementById("cartUsername").innerText = user.name;
  document.getElementById("cartHead").src =
    `https://mc-heads.net/avatar/${user.name.replace(".", "")}/64`;

  document.getElementById("totalItems").innerText = cart.length;
}

/* CLOSE OVERLAY */
overlay.onclick = (e) => {
  if (e.target === overlay) overlay.classList.add("hidden");
};

/* ================= CURRENCY TOGGLE ================= */
document.querySelectorAll(".currency-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".currency-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    const selectedCurrency = btn.dataset.currency;
    console.log("Currency selected:", selectedCurrency);
  });
});

function formatUsername(name, isBedrock) {
  return isBedrock ? `.${name}` : name;
}

usernameDisplay.textContent = formatUsername(username, isBedrock);

/* ADD TO CART BUTTON*/
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.onclick = () => {
    const name = btn.closest(".featured-card").querySelector("h4").innerText;
    cart.push(name);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartCount").innerText = cart.length;
  };
});

function renderCart() {
  const totalItems = cart.items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.items.reduce((s, i) => s + (i.price * i.qty), 0);

  document.querySelector(".cart-count").textContent = totalItems;

  const cartBody = document.querySelector(".cart-body");
  cartBody.innerHTML = "";

  if (cart.items.length === 0) {
    cartBody.innerHTML = `<p>EMPTY CART</p>`;
  } else {
    cart.items.forEach(item => {
      cartBody.innerHTML += `
        <div class="cart-item">
          <span>${item.name} × ${item.qty}</span>
          <span>${item.price * item.qty} ${item.currency}</span>
        </div>
      `;
    });
  }

  document.querySelector(".cart-total-items").textContent = totalItems;
  document.querySelector(".cart-total-price").textContent = totalPrice;
}
renderCart();

function renderUser() {
  const nameEl = document.querySelector(".cart-username");

  if (!cart.username) {
    nameEl.textContent = "Guest";
  } else {
    nameEl.textContent = cart.isBedrock
      ? `.${cart.username}`
      : cart.username;
  }
}
renderUser();

document.querySelector(".checkout-btn").addEventListener("click", () => {
  cart.items = [];
  saveCart();
  renderCart();
});

window.addEventListener("load", renderCart);
