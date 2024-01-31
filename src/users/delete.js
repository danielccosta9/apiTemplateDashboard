const database = require("../database/config.js");

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await database.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);

    if (result.rows.length > 0) {
      res.json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = deleteUser;