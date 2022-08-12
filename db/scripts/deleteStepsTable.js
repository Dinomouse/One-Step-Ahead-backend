import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS public.steps;`;
await query(sqlString);
