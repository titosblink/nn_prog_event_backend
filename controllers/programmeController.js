import db from "../config/db.js";

const getProgrammesByDay = (req, res) => {
  const daycode = req.params.daycode;
  const sql = "SELECT * FROM programme WHERE daycode = ?";

  db.query(sql, [daycode], (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error", error: err });
    res.status(200).json(results);
  });
};

export { getProgrammesByDay };
