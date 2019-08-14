const db = require("../data/db-config.js");

module.exports = {
  find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  /*
  SELECT st.id, sc.scheme_name, st.step_number, st.instructions
  FROM steps as st
  JOIN schemes as sc
  ON st.scheme_id = sc.id
  ORDER BY st.step_number
  WHERE st.scheme_id = id
  */
  
  return db("steps as st")
    .join("schemes as sc", "st.scheme_id", "sc.id")
    .select("st.id","sc.scheme_name","st.step_number", "st.instructions")
    .orderBy("st.step_number")
    .where("st.scheme_id", id);
}

async function add(scheme) {
  const [newSchemeId] = await db("schemes").insert(scheme);
  return findById(newSchemeId);
}

async function update(changes, id) {
  await db("schemes").where({id}).update(changes);
  return findById(id);
}

async function remove(id) {
  const deletedScheme = await findById(id);
  await db("schemes").where({id}).del();
  return deletedScheme;
}