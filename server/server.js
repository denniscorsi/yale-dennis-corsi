import express from "express";

// Initialize express app
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.get("/search", pmController.search, (req, res) => {});

app.get("/fetch/:task_id", pmController.fetch, (req, res) => {});

// Catch-all endpoint to send a 404 status
app.use("*", (req, res) => {
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Express error handler caught an unknown middleware error",
    status: 500,
    message: "Internal Server Error"
  };
  const error = Object.assign({}, defaultError, err);
  res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
