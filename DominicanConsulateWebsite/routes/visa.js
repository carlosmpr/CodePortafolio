var express = require("express");
var router = express.Router();
var dbvisa= require("../models/visa");
var app= express();




// dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE TURISMO" ,

//                         Descripcion: "Los visados de turismo se otorgan para viajes turísticos, culturales, asistencia a congresos o convenciones. Tendrán una vigencia de 60 días y serán válidos para una sola entrada o para entradas múltiples. Los beneficiarios no pueden desempeñar actividades lucrativas algunas en territorio dominicano",

                       
//                       Link:"https://drive.google.com/file/d/1FKHunYkuy9Z-2ewEUWkzTcnDNVC54G7U/view?usp=sharing"

                        
             
             
         
//       }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   /////////////////////////////////Visa Diplomatica/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISAS DIPLOMÁTICAS, OFICIALES Y DE CORTESÍA" ,

//                         Descripcion: "Las visas diplomáticas se otorgan a miembros y familiares de misiones diplomáticas y consulares, incluyendo a miembros de organismos internacionales; las visas oficiales se otorgan a funcionarios gubernamentales y/o de organismos internacionales y sus familiares poseedores de pasaportes oficiales que viajen al país en forma particular o en gestiones propias de su cargo; y la visa de cortesía se otorgan en pasaportes ordinarios a aquellos funcionarios diplomáticos o gubernamentales y sus familiares que viajen al país con esta clase de pasaportes, en igual sentido se otorgan visas de cortesía a personalidades distinguidas y a sus familiares.Todas las delegaciones diplomáticas, consulares, organismos internacionales y personalidades pueden dirigirse a las oficinas consulares de la República Dominicana y solicitar una visa de categoría diplomática, oficial o de cortesía.",

                       
//                       Link:"https://drive.google.com/file/d/1GaO8kUZXOqKgdu5z15DAq5oR_8-eie2z/view?usp=sharing",

                        
             
             
         
//     }, 
//     function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   /////////////////////////////////Visa Dependencia/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE DEPENDENCIA" ,

//                         Descripcion: "Las visas por dependencia son expedidas en razón de dependencia familiar de los usuarios, de los beneficiarios de visas diplomáticas, oficiales, cortesías, negocios y de estudiante, sujeto al tipo de visa otorgada al familiar principal o al patrono de quien dependan.",

                       
//                       Link:"https://drive.google.com/file/d/1web1HfBmsfuUfeobiMshGiVvrJIqfY_G/view?usp=sharing",

                        
             
             
         
//     },  function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


// /////////////////////////////////Visa VISA DE ESTUDIANTE/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE ESTUDIANTE" ,

//                         Descripcion: "Las visas de estudiantes son expedidas con fines de realizar estudios en la República Dominicana a quienes demuestren su condición de estudiantes, aceptados por las instituciones docentes dominicanas donde vayan a cursar estudios. Esta visa será renovable cada año debiendo los interesados cumplir los requisitos exigidos para tal efecto.",

                       
//                       Link:"https://drive.google.com/open?id=1PxqOfIrfDLtpHyivKr565nNp0PTxJw8m",

                        
             
             
         
//     },  function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//     ///////////////////////////////// VISA DE NEGOCIO SIMPLE/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE NEGOCIO SIMPLE" ,

//                         Descripcion: "Las visas de negocios son expedidas para viajes de negocios, profesionales o con fines comerciales. Se otorga por sesenta (60) días y podrán ser renovadas automáticamente a solicitud del interesado dentro del término de los 60 días de vigencia, sin la autorización expresa de la Secretaría de Estado de Relaciones Exteriores. Si la persona necesita viajar al país con mayor frecuencia puede solicitar una visa de negocios con entradas múltiples válida por un año, no pudiendo permanecer en el país más de dos meses consecutivos",

                       
//                       Link:"https://drive.google.com/file/d/1FKHunYkuy9Z-2ewEUWkzTcnDNVC54G7U/view?usp=sharing",

                        
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   ///////////////////////////////// VISA DE NEGOCIO MULTIPLE/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE NEGOCIO MULTIPLE" ,

//                         Descripcion: "Las visas de negocios son expedidas para viajes de negocios, profesionales o con fines comerciales. Se otorga por sesenta (60) días y podrán ser renovadas automáticamente a solicitud del interesado dentro del término de los 60 días de vigencia, sin la autorización expresa de la Secretaría de Estado de Relaciones Exteriores. Si la persona necesita viajar al país con mayor frecuencia puede solicitar una visa de negocios con entradas múltiples válida por un año, no pudiendo permanecer en el país más de dos meses consecutivos",

                       
//                       Link:"https://drive.google.com/file/d/1pKGNLlemDt8hlnd5SQdm79LY_lEvCat0/view?usp=sharing",

                        
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   ///////////////////////////////// VISA DE RESIDENCIA POR INVERSION/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE RESIDENCIA POR INVERSION " ,

//                         Descripcion: "Se otorgan para viajes con fines de establecerse en la República Dominicana de manera definitiva. Tienen una vigencia inicial de 60 días y son válidas para una sola entrada. Una vez en territorio dominicano, el beneficiario de este visado deberá presentarse en la Dirección General de Migración para formalizar los trámites de su residencia, debiendo completar los requisitos adicionales que ésta exige.",

                       
//                       Link:"https://drive.google.com/file/d/1mr8n2ZrgxZEHhlcsyTXD8MQ1iv9RwdL9/view?usp=sharing",

                        
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
  
//   ///////////////////////////////// VISA DE RESIDENCIA POR PENSION/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE RESIDENCIA POR PENSION" ,

//                         Descripcion: "Se otorgan para viajes con fines de establecerse en la República Dominicana de manera definitiva. Tienen una vigencia inicial de 60 días y son válidas para una sola entrada. Una vez en territorio dominicano, el beneficiario de este visado deberá presentarse en la Dirección General de Migración para formalizar los trámites de su residencia, debiendo completar los requisitos adicionales que ésta exige.",

                       
//                       Link:"https://drive.google.com/file/d/1mzHQm0asC9ITmSBFKF7cw3E4T0FMFb7v/view?usp=sharing",

                        
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   ///////////////////////////////// VISA DE RESIDENCIA POR RENTISTA/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE RESIDENCIA POR RENTISTA" ,

//                         Descripcion: "Se otorgan para viajes con fines de establecerse en la República Dominicana de manera definitiva. Tienen una vigencia inicial de 60 días y son válidas para una sola entrada. Una vez en territorio dominicano, el beneficiario de este visado deberá presentarse en la Dirección General de Migración para formalizar los trámites de su residencia, debiendo completar los requisitos adicionales que ésta exige.",

                       
//                       Link:"https://drive.google.com/file/d/1SzzuMlb4AxLZlVe-uuyKKdU1gSfcDpAn/view?usp=sharing",

                        
             
             
         
       
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
//   ///////////////////////////////// VISA DE RESIDENCIA POR REUNIFICACIÓN FAMILIAR/////////////

//     dbvisa.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "VISA DE RESIDENCIA  POR REUNIFICACIÓN FAMILIAR" ,

//                         Descripcion: "Se otorgan para viajes con fines de establecerse en la República Dominicana de manera definitiva. Tienen una vigencia inicial de 60 días y son válidas para una sola entrada. Una vez en territorio dominicano, el beneficiario de este visado deberá presentarse en la Dirección General de Migración para formalizar los trámites de su residencia, debiendo completar los requisitos adicionales que ésta exige.",

                       
//                       Link:"https://drive.google.com/file/d/17QtlqC8oHBIJ80koxIjGVAsfGlFG4Ni_/view?usp=sharing",

                        
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
  

app.use(express.static(__dirname + "/public"));


router.get("/visa", function(req , res){
   dbvisa.find({}, function(err , legal){
        if(err){
            console.log(err);
            
        }else{
              res.render("Visa", {legal:legal});
        }
    
});

    
});



    



module.exports = router;