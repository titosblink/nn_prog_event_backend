import express from "express";
import { getProgrammesByDay } from "../controllers/programmeController.js";

const router = express.Router();

// GET /api/programmes/:daycode
router.get("/programmes/:daycode", getProgrammesByDay);

export default router;