const database = require("../database/config.js");

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao obter produto:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = getProductById;