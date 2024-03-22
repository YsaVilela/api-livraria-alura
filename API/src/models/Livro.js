import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O nome do livro é obrigatório."],
    },
    editora: {
      type: String,
      required: [true, "A editora do livro é obrigatório."],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é reconhecida."
      }
    },
    preco: {
      type: Number,
      required: [true, "O preço do livro é obrigatório."],
    },
    paginas: {
      type: Number,
      min: [10, "O número de páginasd eve estra entre 10 e 5000."],
      max: [5000, "O número de páginasd eve estra entre 10 e 5000"],
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor do livro é obrigatório."],
    },
  },
  {
    versionKey: false,
  }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
