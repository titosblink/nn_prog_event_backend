import Programme from "../models/Programme.js";

const getProgrammesByDay = async (req, res) => {
  try {
    const programmes = await Programme.find({
      daycode: req.params.daycode
    });

    res.status(200).json(programmes);
  } catch (err) {
    res.status(500).json({
      message: "DB Error",
      error: err
    });
  }
};

export { getProgrammesByDay };