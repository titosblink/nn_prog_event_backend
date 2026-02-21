import express from "express";
import { getAllDays } from "../controllers/daysController.js";
import { default as Day } from "../models/Day.js";

const router = express.Router();

router.get("/days", getAllDays);

router.get("/day/:daycode", async (req, res) => {
  try {
    const day = await Day.findOne({ daycode: req.params.daycode });
    if (!day) return res.status(404).json({ message: "Day not found" });
    res.json(day);
  } catch (err) {
    console.error("Error fetching day:", err);
    res.status(500).json({ message: "DB Error", error: err.message });
  }
});

export default router;