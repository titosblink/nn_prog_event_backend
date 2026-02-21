import Day from "../models/Day.js";

const getAllDays = async (req, res) => {
  try {
    const days = await Day.find();
    res.status(200).json(days);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching days",
      error: err
    });
  }
};

export { getAllDays };