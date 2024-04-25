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
  const dbresponse = await pool.query(`
    SELECT *
    FROM tasks
    WHERE task_id = '${task_id}'
  `);

  const task = dbresponse.rows[0];
  return task;
};

export default db;
