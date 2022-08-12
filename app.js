import express from "express";
import stepsRouter from "./router/steps.js";
// import todoRouter from "./router/todo.js";
// import codeRouter from "./router/code.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/steps", stepsRouter);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
