console.log("Homepage loaded");

fetch("https://api.mcsrvstat.us/2/mangomc.info.gf")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("mc-count");
    if (!el) return;

    if (data.online) {
      el.textContent = data.players.online;
    } else {
      el.textContent = "0";
    }
  })
  .catch(() => {
    document.getElementById("mc-count").textContent = "0";
  });
