const database = require("../database/config.js");

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = deleteProduct;