import express from "express";
import { getAllDays } from "../controllers/daysController.js";
import db from "../config/db.js";

const router = express.Router();

router.get("/days", getAllDays);

router.get("/day/:daycode", (req, res) => {
  const sql = "SELECT * FROM days WHERE daycode = ?";
  db.query(sql, [req.params.daycode], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

export default router;
