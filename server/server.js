const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const flowerRoutes = require("./routes/flowerRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/flowers", flowerRoutes);

app.get("/", (req, res) => {
    res.send("FlowerBoom backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});