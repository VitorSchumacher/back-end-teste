import mongoose from "mongoose";

mongoose.connect("mongodb+srv://duduschuminha:Internacional8@cluster0.uul3xe2.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;