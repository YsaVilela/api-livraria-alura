import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/busca", LivroController.buscarLivroPorEditora);
routes.get("/livros/:id", LivroController.buscarLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;