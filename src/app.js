import express from "express";
import morgan from 'morgan';

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

import { PORT } from "./config.js";

const app = express();

app.set('PORT', PORT);
app.set("appName", "MYSQL-RESTAPI");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;