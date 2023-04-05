import express from "express";
import LivroController from "../controllers/livrosController.js";

const livros = express.Router();

livros
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.listarLivroId)
  .post("/livros", LivroController.cadastrarLivros)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);

export default livros;
