const pool = require("../../config/db");

const endGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fin = new Date();
    const result = await pool.query(
      "UPDATE juegos SET fin = $1, estado = FALSE WHERE id_juego = $2 RETURNING *",
      [fin, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }
    res.json({ message: "Juego cerrado exitosamente" });
  } catch (err) {
    next(err);
  }
};

module.exports = endGame;
