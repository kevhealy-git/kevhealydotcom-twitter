let data = {
  username: "kevhealy_tw", // No leading @ here
  homeLabel: "Home",
  homeUrl: "https://www.kevhealy.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
