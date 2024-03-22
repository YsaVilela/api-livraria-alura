import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "Livro cadasrado com sucesso", livro: livroCriado });
    } catch (error) {
      next(error);
    }
  }

  static async buscarLivroPorId(req, res, next) {
    try {
      const idBuscado = req.params.id;
      const livroBuscado = await livro.findById(idBuscado);

      if (livroBuscado !== null) {
        res.status(200).json(livroBuscado);
      } else {
        res.status(404).json({ message: "Livro não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async buscarLivroPorEditora(req, res, next) {
    const editoraBuscada = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editoraBuscada });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const idBuscado = req.params.id;
      await livro.findByIdAndUpdate(idBuscado, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const idBuscado = req.params.id;
      await livro.findByIdAndDelete(idBuscado);
      res.status(204).send("Livro removido com sucesso");
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;