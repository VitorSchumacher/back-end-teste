import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor", "nome")
      .populate("editora")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };
  static listarLivroId = (req, res) => {
    const id = req.params.id;
    livros
      .findById(id)
      .populate("autor")
      .populate("editora")
      .exec((err, livros) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.messege}: Item não encontrado` });
        } else {
          res.status(200).json(livros);
        }
      });
  };
  static cadastrarLivros = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message}. Falha ao cadastrar livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualiado com sucesso" });
      } else {
        res.status(500).send({ message: `${err.messege}: Erro ao atualizar` });
      }
    });
  };
  static excluirLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        res.status(500).send({ message: `${err.message}: Erro ao deletar` });
      }
    });
  };
}

export default LivroController;
