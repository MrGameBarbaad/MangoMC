console.log("Homepage loaded");

fetch("https://api.mcsrvstat.us/2/MangoMC.info.gf")
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

fetch("https://discord.com/api/guilds/1457312121321689151/widget.json")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("dc-count");
    if (!el) return;
    el.textContent = data.presence_count;
  })
  .catch(() => {
    document.getElementById("dc-count").textContent = "0";
  });
