import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all employees
router.get("/employees", getEmployees);

// GET an employee
router.get("/employees/:id", getEmployee);

// DELETE an employee
router.delete("/employees:id", deleteEmployee);

// INSERT an employee
router.post("/employees", createEmployee);

// replace put to patch
router.patch("/employees/:id", updateEmployee);


export default router;
