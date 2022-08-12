import { query } from "../index.js";

const createTableString = `CREATE TABLE IF NOT EXISTS steps (day VARCHAR(10), 
                steps INT NOT NULL);`;

await query(createTableString);
console.log("Created steps table");
