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

  const task_id = dbresponse.rows[0].task_id;
  return task_id;
};

db.getTask = async (task_id) => {
  const dbresponse = await pool.query(
    `
    SELECT *
    FROM tasks
    WHERE task_id = $1
  `,
    [task_id]
  );

  const task = dbresponse.rows[0];
  return task;
};

db.addPmidsToTask = async (task_id, idList, runTime) => {
  const idsString = JSON.stringify(idList);
  await pool.query(
    `
    UPDATE tasks
    SET status = 'completed',
        result = $1,
        run_seconds = $2
    WHERE task_id = $3;
  `,
    [idsString, runTime, task_id]
  );
};

export default db;
