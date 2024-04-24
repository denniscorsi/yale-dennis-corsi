import db from "./databaseAPI.js";
import pm from "./PubMedAPI.js";

const pmController = {};

pmController.getNumRecords = async (req, res, next) => {
  const { term } = req.query;

  const numRecords = await pm.getNumRecords(term);

  const task_id = await pm.initiatePendingTask(numRecords);

  const response = {
    records: numRecords,
    query: term,
    task_id: task_id
  };
  console.log(response);



  res.locals.response = response;
  return next();
};

export default pmController;
