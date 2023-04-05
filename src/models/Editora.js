import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
  {
    id: { type: "string" },
    nome: { type: "string", required: true },
  },
  {
    versionKey: false,
  }
);

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;
