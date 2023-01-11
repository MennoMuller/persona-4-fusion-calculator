const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "persona4golden",
  password: "Ikwil1nloggen!",
  port: 5432,
});

const getPersonas = (request, response) => {
  pool.query(
    `SELECT persona.personaname, persona.arcananame, persona.baselevel FROM persona
        JOIN arcana ON arcana.arcananame = persona.arcananame
        WHERE persona.nonplayer IS NULL AND arcana.arcananumber < 21
        ORDER BY persona.baselevel ASC, arcana.arcananumber DESC, persona.arcananame DESC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getResultPersona = (request, response) => {
  const level = parseInt(request.params.level);
  const round = request.params.round === "down" ? "<=" : ">=";
  const order = request.params.round === "down" ? "DESC" : "ASC";
  const arcana = request.params.arcana;

  const query = `SELECT persona.personaname, persona.baselevel FROM persona 
    LEFT JOIN persona_fusion ON persona_fusion.fusion_result = persona.personaname
    WHERE arcananame = '${arcana}' AND baselevel ${round} ${level} AND persona_fusion.special is null
    ORDER BY baselevel ${order}
    LIMIT 1`;

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addFusion2 = (request, response) => {
  const { ingredient1, ingredient2, fusion_result } = request.body;

  pool.query(
    `INSERT INTO persona_fusion (ingredient1, ingredient2, fusion_result) VALUES (${ingredient1}, ${ingredient2}, ${fusion_result}) RETURNING *`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Fusion added with ID: ${results.rows[0].fusion_id}`);
    }
  );
};

const addFusion3 = (request, response) => {
  const { ingredient1, ingredient2, ingredient3, fusion_result } = request.body;

  pool.query(
    `INSERT INTO persona_fusion (ingredient1, ingredient2, ingredient3, fusion_result) VALUES (${ingredient1}, ${ingredient2}, ${ingredient3}, ${fusion_result}) RETURNING *`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Triangle Fusion added with ID: ${results.rows[0].fusion_id}`);
    }
  );
};

module.exports = {
  getPersonas,
  getResultPersona,
  addFusion2,
  addFusion3,
};
