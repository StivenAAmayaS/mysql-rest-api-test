import { pool } from "../db.js";

export const ping = async (req, res) => {
  // res.send('pong');
  const [ result ] = await pool.query("SELECT 1 + 1 AS result");
  res.json(result[0]);
};
