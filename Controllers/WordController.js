const db = require("../Config/Sequelize");
const Word = db.WordModel;

module.exports = {
  addWord: async (req, res) => {
    try {
      const data = req.body;
      const newWord = await Word.create(data);
      res.send(newWord);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Word.",
      });
    }
  },
  getAllWord: async (req, res) => {
    try {
      const result = await Word.findAll();
      res.json({
        success: 1,
        message: "Data Received",
        data: result,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getWordById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Word.findByPk(id);
      if (result) {
        res.json({
          success: 1,
          message: "Data Received",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Word.",
      });
    }
  },
  updateWord: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Word.update(data, {
        where: { id: id },
      });
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Update",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Word.",
      });
    }
  },
  updateWordStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await Word.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Update",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Word status.",
      });
    }
  },
  deleteWordById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Word.destroy({ where: { id: id } });
      if (result) {
        res.json({
          success: 1,
          message: "Data Deleted",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Delete",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Word.",
      });
    }
  },
};
