const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appoinments = new Schema(

    {
        Name:{
            type: String,
            require: true
        },
        phone:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        date:{
            type: String,
            require: true
        },
        servicio:{
            type: String,
            require: true
        },
        departamento:{
            type: String,
            require: true
        },
        value:{
            type:Number,
            require: true
        },
        code:{
            type:Number
        }
    }
)


module.exports = mongoose.model("Citas" , Appoinments);