const database = require("../database/config.js");

const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const {
    id_product,
    id_user,
    data_transaction,
    status_transaction,
  } = req.body;
  try {
    const result = await database.query(
      "UPDATE transactions SET id_product = $1, id_user = $2, data_transaction = $3, status_transaction = $4 WHERE id = $5 RETURNING *",
      [
        id_product,
        id_user,
        data_transaction,
        status_transaction,
        id,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = updateTransaction;