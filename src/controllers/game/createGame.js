const pool = require("../../config/db");

const createGame = async (req, res, next) => {
  try {
    const ini = new Date();
    const result = await pool.query(
      "INSERT INTO juegos (ini, estado) VALUES ($1, TRUE) RETURNING id_juego",
      [ini]
    );
    res.status(201).json({ id_juego: result.rows[0].id_juego });
  } catch (err) {
    next(err);
  }
};

module.exports = createGame;
