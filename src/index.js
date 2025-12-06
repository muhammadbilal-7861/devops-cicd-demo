const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "DevOps CI/CD demo app is running",
    environment: process.env.NODE_ENV || "development"
  });
});

// very small "test" just to have something for CI
if (process.argv[2] === "test") {
  console.log("Running basic health check...");
  if (!process.env.NODE_ENV) {
    console.log("NODE_ENV not set, using default.");
  }
  console.log("Health check passed.");
  process.exit(0);
} else {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
