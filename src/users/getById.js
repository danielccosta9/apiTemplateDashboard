const database = require("../database/config.js");

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await database.query('SELECT * FROM users WHERE id = $1', [userId]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao obter usuário por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = getUserById;