import express from "express";
// import {
//   getNotes,
//   postNotes,
//   deleteNotesByID,
//   replaceNotesByID,
//   patchNoteByID,
//   searchNotes,
//   patchAllNotes,
// } from "../models/notesModel.js";
import { getSteps, replaceStepsByID, postSteps } from "../models/stepsModel.js";

const stepsRouter = express.Router();

stepsRouter.get("/", async function (req, res) {
  let result = await getSteps();
  return res.json({
    success: true,
    payload: result,
  });
});

stepsRouter.put("/:id", async function (req, res) {
  const replaceSteps = req.body;
  const replaceID = req.params.id;
  const result = await replaceStepsByID(replaceID, replaceSteps);
  res.json({
    success: true,
    payload: result,
  });
});

stepsRouter.post("/", async function (req, res) {
  const newSteps = req.body;
  let result = await postSteps(newSteps);
  return res.json({
    success: true,
    payload: result,
  });
});

export default stepsRouter;
