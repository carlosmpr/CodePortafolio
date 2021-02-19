var mongoose = require("mongoose");

var legalSchema = new mongoose.Schema({
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

var Legal = mongoose.model("Legal", legalSchema);
module.exports = Legal;