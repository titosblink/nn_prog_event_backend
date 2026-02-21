import express from "express";
import { getAllDays } from "../controllers/daysController.js";
import Day from "../models/Day.js";

const router = express.Router();

router.get("/days", getAllDays);

router.get("/day/:daycode", async (req, res) => {
  try {
    const day = await Day.findOne({
      daycode: req.params.daycode
    });

    res.json(day);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;