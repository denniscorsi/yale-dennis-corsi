import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

const { Pool } = pkg;

// Connect to PostgreSQL database
dotenv.config();
const DB_URL = process.env.DB_URL;
const pool = new Pool({
  connectionString: DB_URL,
  max: 5
});

const db = {};

db.addPendingTask = async () => {
  const dbresponse = await pool.query(`
    INSERT INTO tasks (status) 
    VALUES ('processing')
    RETURNING task_id;
  `);

  console.log("Processing task is now in db");

  const task_id = dbresponse.rows[0].task_id;
  return task_id;
};

db.getTask = async (task_id) => {
  // TODO: paramterize the query
  const dbresponse = await pool.query(`
    SELECT *
    FROM tasks
    WHERE task_id = '${task_id}'
  `);

  const task = dbresponse.rows[0];
  return task;
};

db.addPmidsToTask = async (task_id, idList, runTime) => {
  const idsString = JSON.stringify(idList);
  await pool.query(`
    UPDATE tasks
    SET status = 'completed',
        result = '${idsString}',
        run_seconds = ${runTime}
    WHERE task_id = '${task_id}';
  `);

  console.log("Task is complete");
};

export default db;
