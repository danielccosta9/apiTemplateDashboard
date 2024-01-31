const database = require("../database/config.js");

const createProduct = async (req, res) => {
  const { title, price, stock, color, size, description, category } = req.body;
  try {
    const result = await database.query(
      "INSERT INTO products (title, price, stock, color, size, description, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, price, stock, color, size, description, category]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = createProduct;
