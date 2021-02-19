const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user: {
    name: String,
    surname: String,
    cedula: String,
    expediente: String,
    direccion: []
  }
});

mongoose.model("users", userSchema);
