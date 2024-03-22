import express from "express";
import db from "./config/dbConnetct.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import routes from "./routes/index.js";

db.on("error", (error) => {
  console.error("Erro de conexão", error);
});

db.once("open", () => {
  console.log("Conectado com o banco de dados");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);

export default app;

