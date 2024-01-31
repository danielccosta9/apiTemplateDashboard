const database = require("../database/config.js");

const createUser = async (req, res) => {
  const { username, email, phone, password, active, admin } = req.body;
  try {
    const result = await database.query(
      "INSERT INTO users (username, email, phone, password, active, admin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [username, email, phone, password, active, admin]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = createUser;
