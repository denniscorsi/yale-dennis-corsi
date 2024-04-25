import db from "./databaseAPI.js";
import pm from "./PubMedAPI.js";

const pmController = {};

pmController.getNumRecords = async (req, res, next) => {
  try {
    const { term } = req.query;

    const numRecords = await pm.getNumRecords(term);

    const task_id = await pm.initiatePendingTask(numRecords);

    const response = {
      records: numRecords,
      query: term,
      task_id: task_id
    };

    res.locals.response = response;
    return next();
  } catch (err) {
    return next({
      log: err
    });
  }
};

pmController.fetchTask = async (req, res, next) => {
  try {
    const { task_id } = req.params;
    const task = await db.getTask(task_id);

    if (task.status === "processing") {
      const response = {
        task_id: task.task_id,
        status: task.status,
        created_time: task.created_time
      };
      res.locals.response = response;
    } else if (task.status === "completed") {
      const response = {
        task_id: task.task_id,
        status: task.status,
        results: {
          pmids: JSON.parse(task.result)
        },
        created_time: task.created_time,
        run_seconds: task.run_seconds
      };
      res.locals.response = response;
    }

    return next();
  } catch (err) {
    return next({
      log: err
    });
  }
};

export default pmController;
