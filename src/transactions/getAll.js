const database = require("../database/config.js");

const getAllTransactions = async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM transactions");

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar transações:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = getAllTransactions;