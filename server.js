const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/download", async (req, res) => {
  const { url } = req.query;

  if (!url || !url.includes("tiktok.com")) {
    return res.json({ status: "error", message: "Invalid URL" });
  }

  try {
    const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const response = await axios.get(api);

    res.json(response.data);

  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
