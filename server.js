import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const username = "ChessExpert07"; // <-- put your Hive username here

app.get("/mydata", async (req, res) => {
  try {
    const response = await fetch(`https://api.playhive.com/v0/game/all/all/${username}`);
    if (!response.ok) throw new Error("API Error");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
