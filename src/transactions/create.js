const database = require("../database/config.js");

const createTransaction = async (req, res) => {
  const {
    id_product,
    id_user,
    data_transaction,
    status_transaction,
  } = req.body;
  try {
    const result = await database.query(
      "INSERT INTO transactions (id_product, id_user, data_transaction, status_transaction) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        id_product,
        id_user,
        data_transaction,
        status_transaction,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = createTransaction;
