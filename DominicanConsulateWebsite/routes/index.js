var express = require("express");
var router = express.Router();


router.get("/informacion", function(req , res){
    res.render("principal");
    
});



router.get("/", function(req , res){
    res.render("inicio");
    
});


router.get("/estudiantesmeritorio", function(req , res){
    res.render("meritorio");
    
});




router.get("/yosoydominicano", function(req , res){
    res.render("iframe");
    
});

router.get("/comunidad", function(req , res){
    res.render("cultura");
    
});


router.get("/cultura", function(req , res){
    res.render("Comunidad");
    
});

router.get("/salud", function(req , res){
    res.render("salud");
    
});


router.get("/externa", function(req , res){
    res.render("externa");
    
});


router.get("/doble", function(req , res){
    res.render("ruta");
    
});



router.get("/inmobiliaria", function(req , res){
    res.render("inmobiliaria");
    
});


router.get("/ciudad-juan-bosch", function(req , res){
    res.render("ciudad");
    
});

router.get("/operativo", function(req , res){
    res.render("operativo");
    
});



router.get("/noticias", function(req , res){
    res.render("inicio");
    
});



router.get("/traducciones", function(req , res){
    res.render("traduccione");
    
});






router.get("/ConsulGeneral", function(req , res){
    res.render("inicio");
    
});


router.get("/services", function(req , res){
    res.render("services");
    
});



module.exports = router;