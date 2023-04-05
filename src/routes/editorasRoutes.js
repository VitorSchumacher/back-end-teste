import express from "express";
import EditoraController from "../controllers/editorasController.js";

const editoras = express.Router();

editoras
  .get("/editoras", EditoraController.listarEditoras)
  .get("/editoras/:id", EditoraController.listarEditoraId)
  .post("/editoras", EditoraController.cadastrarEditoras)
  .put("/editoras/:id", EditoraController.atualizarEditora)
  .delete("/editoras/:id", EditoraController.excluirEditora);

export default editoras;
