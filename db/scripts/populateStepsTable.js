import { query } from "../index.js";

const data = [
  { day: "2022-01-01", steps: 6234 },
  { day: "2022-01-02", steps: 10001 },
  { day: "2022-01-03", steps: 8309 },
  { day: "2022-01-04", steps: 4000 },
  { day: "2022-01-05", steps: 6501 },
];

for (let i = 0; i < data.length; i++) {
  await query("INSERT INTO steps(day,steps) VALUES ($1,$2)", [
    data[i].day,
    data[i].steps,
  ]);
}
