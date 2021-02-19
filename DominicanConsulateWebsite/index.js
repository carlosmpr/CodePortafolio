var express = require("express");
var app= express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
 var mongoose = require("mongoose");
 var indexRoutes     = require("./routes/index");
  var PasaporteRoutes     = require("./routes/pasaport");
  var jceteRoutes     = require("./routes/jce");
  var ApostillaRoutes     = require("./routes/Apostilla");
   var legalRoutes     = require("./routes/legal");
   var visaRoutes     = require("./routes/visa");
 
 // mongoose.connect("mongodb://localhost/informacionconsular14");
 mongoose.connect("mongodb://consu:1501Broadway@ds137703.mlab.com:37703/consuladodominicano");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.enable('trust proxy');


 app.use(function(req, res, next){
  	if(req.header('x-forwarded-proto') !== 'http'){
  		res.redirect('http://' + req.header('host') + req.url);
  	}else{
  		next();
  	}
  });
  
app.use(indexRoutes);
app.use( PasaporteRoutes);
app.use( jceteRoutes);
app.use( ApostillaRoutes);
app.use(legalRoutes);
app.use(visaRoutes);

app.listen(process.env.PORT , process.env.IP , function() {
   
   console.log("Sistema de Informacion consular"); 
})