const database = require("../database/config.js");

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {title, price, stock, color, size, description, category } = req.body;
  try {
    const result = await database.query(
      "UPDATE products SET name = $1, price = $2, stock = $3, color = $4, size = $5, description = $6, category = $7 WHERE id = $8 RETURNING *", 
      [title, price, stock, color, size, description, category, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = updateProduct;