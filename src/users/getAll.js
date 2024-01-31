const database = require("../database/config.js");

const getAllUsers = async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM users");

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter todos os usuários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = getAllUsers;
