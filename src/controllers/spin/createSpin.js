const pool = require("../../config/db");
const getPropNum = require("../../handlers/getPropNum");

const createSpin = async (req, res, next) => {
  try {
    const { numero, id_juego } = req.body;

    // Obtener el número de orden de la tirada
    const result = await pool.query(
      "SELECT COUNT(*) as count FROM tiradas WHERE juego = $1",
      [id_juego]
    );
    const orden = parseInt(result.rows[0].count) + 1;

    // Insertar la nueva tirada
    await pool.query(
      "INSERT INTO tiradas (orden, juego, numero) VALUES ($1, $2, $3)",
      [orden, id_juego, numero]
    );

    const propiedades = getPropNum(numero);

    res.status(201).json({ message: "Tirada creada con éxito", propiedades });
  } catch (err) {
    next(err);
  }
};

module.exports = createSpin;
