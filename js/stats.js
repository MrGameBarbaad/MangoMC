document.addEventListener("DOMContentLoaded", () => {

  // Minecraft players
  fetch("https://api.mcsrvstat.us/2/MangoMC.info.gf")
    .then(res => res.json())
    .then(data => {
      document.getElementById("player-count").textContent =
        data.players?.online ?? "0";
    });

  // Discord members
  fetch("https://discord.com/api/guilds/1457312121321689151/widget.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("discord-count").textContent =
        data.presence_count ?? "0";
    });

});
