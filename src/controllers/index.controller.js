import { pool } from "../db.js";

export const index = (req, res) => {
  res.json({ message: "Welcome to my API" });
};

export const ping = async (req, res) => {
  // res.send('pong');
  const [result] = await pool.query("SELECT 1 + 1 AS result");
  res.json(result[0]);
};
