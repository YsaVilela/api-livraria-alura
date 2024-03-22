import express from "express";
import AutorController from "../controller/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.post("/autores", AutorController.cadastrarAutores);
routes.get("/autores/:id", AutorController.buscarAutorPorId);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;