import autores from "../models/Autor.js";

class AutoresController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };
  static listarAutorId = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.messege}: autor não encontrado` });
      } else {
        res.status(200).json(autores);
      }
    });
  };
  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message}. Falha ao cadastrar autor` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };
  static atualizarAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualiado com sucesso" });
      } else {
        res.status(500).send({ message: `${err.messege}: Erro ao atualizar` });
      }
    });
  };
  static excluirAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndDelete(id, (err) => {
        if (!err) {
          res.status(200).send({ message: "Autor removido com sucesso" });
        } else {
          res.status(500).send({ message: `${err.message}: Erro ao deletar` });
        }
      });
  };
}
export default AutoresController;