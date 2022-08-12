import { query } from "../db/index.js";

//refactor patch to handle qeury
//Additional testing required for PostNotes function and response object

export async function getSteps() {
  const res = await query(`SELECT day,steps FROM steps;`);
  const stepsArray = res.rows;
  return stepsArray;
}

export async function replaceStepsByID(replaceID, { steps }) {
  const res = await query(
    `UPDATE steps SET steps = $2 WHERE day = $1 RETURNING *;`,
    [replaceID, steps]
  );
  const replacedsteps = res.rows;
  return replacedsteps;
}

export async function postSteps({ day, steps }) {
  const res = await query(
    `INSERT INTO steps(day,steps) VALUES ($1,$2) RETURNING *;`,
    [day, steps]
  );
  // return newPost;
}
