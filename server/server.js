import express from "express";
import bodyParser from "body-parser";
import pmController from "./pmController.js";
import pm from "./PubMedAPI.js";

// Initialize express app
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.get("/search", pmController.getNumRecords, (req, res) => {
  const { response } = res.locals;
  const { task_id, query, records } = response;

  // These function is async, so will not block the reposnse getting to the client
  pm.getIds(query, records);

  res.status(200).json(response);
});

// app.get("/fetch/:task_id", pmController.fetch, (req, res) => {});

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
