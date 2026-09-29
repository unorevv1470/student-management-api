const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const PORT = 3000;

// Middleware to read JSON from requests
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Student routes
app.use("/students", studentRoutes);

// Simple error handler for wrong routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
