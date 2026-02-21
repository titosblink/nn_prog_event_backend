import Programme from "../models/Programme.js";

const getProgrammesByDay = async (req, res) => {
  try {
    const programmes = await Programme.find({
      daycode: req.params.daycode
    }).sort({ time: 1 });

    res.status(200).json(programmes);
  } catch (err) {
    console.error("Error fetching programmes:", err);
    res.status(500).json({
      message: "DB Error",
      error: err.message
    });
  }
};

export { getProgrammesByDay };