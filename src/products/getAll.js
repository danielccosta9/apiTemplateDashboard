const database = require("../database/config.js");

const getAllProducts = async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM products");

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter todos os produtos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = getAllProducts;