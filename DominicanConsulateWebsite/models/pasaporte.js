var mongoose = require("mongoose");

var pasaporteSchema = new mongoose.Schema({
   name:String,
    Descripcion:String,
    Requisitos:Array(),
    RequisiImg:Array(),
    Pasos:String,
    tiempo:String,
    costo:String,
    observaciones:String,
    other:String
    
});

var Pasaporte = mongoose.model("Pasaporte", pasaporteSchema);
module.exports = Pasaporte;