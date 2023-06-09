import editoras from "../models/Editora.js";

class EditoraController {
  static listarEditoras = (req, res) => {
    editoras.find((err, editoras) => {
      res.status(200).json(editoras);
    });
  };
  static listarEditoraId = (req, res) => {
    const id = req.params.id;
    editoras.findById(id, (err, editoras) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.messege}: Item não encontrado` });
      } else {
        res.status(200).json(editoras);
      }
    });
  };
  static cadastrarEditoras = (req, res) => {
    let editora = new editoras(req.body);
    editora.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message}. Falha ao cadastrar editora` });
      } else {
        res.status(201).send(editora.toJSON());
      }
    });
  };
  static atualizarEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Editora atualiado com sucesso" });
      } else {
        res.status(500).send({ message: `${err.messege}: Erro ao atualizar` });
      }
    });
  };
  static excluirEditora = (req, res) => {
    const id = req.params.id;
    editoras.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Editora removido com sucesso" });
      } else {
        res.status(500).send({ message: `${err.message}: Erro ao deletar` });
      }
    });
  };
}

export default EditoraController;
