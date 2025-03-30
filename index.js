const express = require("express");

const appInstances = [];
const portConfigs = [...Array(25)].map((_, i) => 3000 + i); // Default to 25 ports starting from 3000

const responses = {
  0: "Welcome to the home page!",
  1: "This is a JSON API.",
  2: { message: "Hello from JSON API!" },
  3: "Serving static files...",
  4: "Real-time updates here!",
  5: "Database connection status: OK",
  6: "Image processing service.",
  7: "Video streaming service.",
  8: "Weather API.",
  9: "Stock market updates.",
  10: "Machine Learning model API.",
  11: "IoT device communication hub.",
  12: "Chat service API.",
  13: "File storage API.",
  14: "Email notification service.",
  15: "Payment processing service.",
  16: "Game server API.",
  17: "Blockchain node.",
  18: "Event logging service.",
  19: "News aggregation API.",
  20: "User authentication service.",
  21: "Data analytics service.",
  22: "PDF generation API.",
  23: "SMS gateway service.",
  24: "E-commerce product API.",
};

portConfigs.forEach((port, index) => {
  const app = express();

  app.get("/", (req, res) => {
    const response = responses[index] || `Service running on port ${port}`;
    res.json(typeof response === "object" ? response : { message: response });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  appInstances.push(app);
});
