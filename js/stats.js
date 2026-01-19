// Minecraft player count
fetch("https://api.mcsrvstat.us/2/mangomc.info.gf")
  .then(res => res.json())
  .then(data => {
    document.getElementById("player-count").textContent =
      data.players?.online ?? "0";
  });

// Discord member count (replace YOUR_SERVER_ID)
fetch("https://discord.com/api/guilds/YOUR_SERVER_ID/widget.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("discord-count").textContent =
      data.presence_count;
  });
