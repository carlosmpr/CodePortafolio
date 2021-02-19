var mongoose = require("mongoose");

var apostillaSchema = new mongoose.Schema({
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

var Apostilla = mongoose.model("Apostilla", apostillaSchema);
module.exports = Apostilla;