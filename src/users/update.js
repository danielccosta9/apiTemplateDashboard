const database = require("../database/config.js");

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email, phone, password, active, admin } = req.body;

  try {
    const result = await database.query('UPDATE users SET username = $1, email = $2, phone = $3, password = $4, active = $5, admin = $6, WHERE id = $6 RETURNING *', [username, email, phone, password, active, admin, userId]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = updateUser;