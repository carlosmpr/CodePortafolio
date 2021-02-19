var express = require("express");
var router = express.Router();

router.get("/Acta", function(req , res){
    res.render("acta");
    
});


router.get("/cedula", function(req , res){
    res.render("cedula");
    
});


router.get("/trans", function(req , res){
    res.render("trans");
    
});

module.exports = router;