import { autor } from "../models/Autor.js";

class autorController {
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarAutores(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async buscarAutorPorId(req, res, next) {
    try {
      const idBuscado = req.params.id;
      const autorBuscado = await autor.findById(idBuscado);
      if (autorBuscado !== null) {
        res.status(200).json(autorBuscado);
      } else {
        res.status(404).json({ message: "Autor não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const idBuscado = req.params.id;
      await autor.findByIdAndUpdate(idBuscado, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const idBuscado = req.params.id;
      await autor.findByIdAndDelete(idBuscado);
      res.status(204).send("Autor removido com sucesso");
    } catch (error) {
      next(error);
    }
  }
}

export default autorController;