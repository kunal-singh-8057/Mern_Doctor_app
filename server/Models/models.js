const mongoose = require("mongoose");


const mongooseschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },

    Department:{
        type:String,
        required:true
    },



    add:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    }
});

const appmodel = mongoose.model("userdata",mongooseschema);

module.exports = appmodel;