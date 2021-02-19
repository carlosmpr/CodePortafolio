var mongoose = require("mongoose");

var VisaSchema = new mongoose.Schema({
  name:String,

            Descripcion:String,
            Link:String
            

    
});

var visa = mongoose.model("visa", VisaSchema);
module.exports = visa;