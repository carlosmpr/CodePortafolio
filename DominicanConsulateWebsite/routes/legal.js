var express = require("express");
var router = express.Router();
var dbLegal = require("../models/Legal");
var app= express();







// //////////"Autorización Cobro de Pensión"////////////////////////////

// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Autorización Cobro de Pensión" ,

//                         Descripcion: "Las autorizaciones para COBRAR PENSIÓN son las que realizan los beneficiarios de pensiones de la República Dominicana, que residiendo en otro país, necesitan que la Secretaría de Estado de Hacienda de la República Dominicana pueda entregar el cheque a una segunda persona. La autorización debe ser realizada directamente por el beneficiario directo de la Pensión. Todos los ciudadanos tienen derecho a solicitar en las oficinas consulares de la República Dominicana autorizaciones para retiro de pensión en la República Dominicana. Requisitos: a. Cédula de Identidad y Electoral del pensionado; si no tiene cédula debe presentar su pasaporte. b. Nombre completo y número de pasaporte o Cédula de Identidad y Electoral de la persona que lo representará en la República Dominicana. c. Nombre de la institución en la que fue pensionado.",

                       
//                         Requisitos:["1-Cédula de Identidad y Electoral del pensionado; si no tiene cédula debe presentar su pasaporte." ,
//                          "2-Nombre completo y número de pasaporte o Cédula de Identidad y Electoral de la persona que lo representará en la República Dominicana.",
//                          "3-Nombre de la institución en la que fue pensionado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"Si usted no tiene cita en el consulado Dominicano debera Realizar los siguientes pasos:",
                 
//                  		tiempo:"30-45 minutos o mas aproximadamente",

//             			costo:"Gratis",

//             						observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante <strong>traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en la Cancillería de República Dominicana"
             
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
//     ///////////Autorización para Viajar con Menores///////////////////
// dbLegal.create(
//      {
        
             
           
             
            
//                         name: "Autorización para Viajar con Menores con otra persona" ,

//                         Descripcion: "(Sólo necesitan esta autorización los menores de edad nacidos en territorio dominicano y los extranjeros o a los dominicanos residentes que tengan más de 3 meses en la República Dominicana)Las autorizaciones para viajar con menores son aquellas que realizan ciudadanos dominicanos residentes en el extranjero que necesiten autorizar la salida de la República Dominicana, de sus hijos menores de 18 años de edad. Las autorizaciones deben ser realizadas directamente por los padres o representantes legales de los menores. Todos los ciudadanos tienen derecho a solicitar en las oficinas consulares de la República Dominicana autorizaciones para viajar con menores.",

                       
//                         Requisitos:["1-Pasaporte, Cédula de Identidad y Electoral dominicana y/u otra identificación oficial como licencia de conducir o tarjeta de identidad del estado donde residen los padres." ,
//                          "2-Nombre y número de pasaporte o Cédula de Identidad y Electoral de la persona que viajará con el menor de edad en la República Dominicana.",
//                          "3-Acta de nacimiento del menor. d. Fotografía 2 x 2 del menor"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"un estimado de 30 a 45 minutos",

//             			costo:"$90 Dolares",

            					
//                                 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en Cancillería y Certificados en Migracion República Dominicana"
             
             
         
//     }, 
//     function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
  
  
  
//    ///////////Autorización para Viajar con Menores linea aerea///////////////////
// dbLegal.create(
//      {
        
             
           
             
            
//                         name: "Autorización para Viajar con Menores con Azafata" ,

//                         Descripcion: "(Sólo necesitan esta autorización los menores de edad nacidos en territorio dominicano y los extranjeros o a los dominicanos residentes que tengan más de 3 meses en la República Dominicana)Las autorizaciones para viajar con menores son aquellas que realizan ciudadanos dominicanos residentes en el extranjero que necesiten autorizar la salida de la República Dominicana, de sus hijos menores de 18 años de edad. Las autorizaciones deben ser realizadas directamente por los padres o representantes legales de los menores. Todos los ciudadanos tienen derecho a solicitar en las oficinas consulares de la República Dominicana autorizaciones para viajar con menores.",

                       
//                         Requisitos:["1-Pasaporte, Cédula de Identidad y Electoral dominicana y/u otra identificación oficial como licencia de conducir o tarjeta de identidad del estado donde residen los padres." ,
//                          "2-Nombre y número de pasaporte o Cédula de Identidad y Electoral de la persona que entregará al menor (menores) en la República Dominicana.",
//                          "3-Acta de nacimiento del menor. d. Fotografía 2 x 2 del menor"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"un estimado de 30 a 45 minutos",

//             			costo:"$90 Dolares",

            					
//                                 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en Cancilleria y Certificados en Migracion Republica Dominicana"
             
             
         
//     }, 
//     function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



// /////////////////Acto Notarial de Representación Legal///////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial de Representación Legal" ,

//                         Descripcion: "Los actos notariales de REPRESENTACIÓN son aquellos donde un ciudadano (PODERDANTE) encomienda a otro ciudadano o institución (APODERADO) a que le represente ante cualquier acto civil que el PODERDANTE requiera efectuar ante las instituciones de la República Dominicana Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1- Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Información tan específica como sea posible del objeto de la representación, es decir todas aquellas acciones que el PODERDANTE requiere que el APODERADO realice en nombre del PODERDANTE","4-Información que demuestre que el PODERDANTE tiene capacidad legal para pedir al APODERADO que realice algo en su nombre con relación a algún bien, ya sea mueble o inmueble (título de propiedad, cuenta bancaria, certificado financiero, etc.)","5-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"$160 dolares",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                 other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

// ///////////////////////Acto Notarial Reclamo de Herencia/////////////////

// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Reclamo de Herencia" ,

//                         Descripcion: "Los actos notariales para RECLAMO DE HERENCIA o DETERMINACIÓN DE HEREDEROS son aquellos donde uno o varios ciudadanos (PODERDANTES) encomiendan a otro ciudadano (APODERADO) a reclamar una herencia y al mismo tiempo le instruyen a realizar la partición de los bienes que se obtengan fruto del reclamo. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2- Nombre completo y número de Cédula de Identidad y Electoral del APODERADO.",
//                          "3-Copia del Acto de Defunción.","4-Si desea especificar las propiedades a reclamar deben traer copias de los certificados de títulos de propiedad, certificado e inversión, cuentas bancarias, etc"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
  
//   ///////////////////////Acto Notarial Retiro de Título////////////////////



// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Retiro de Título" ,

//                         Descripcion: "Los actos notariales para RETIRO DE TÍTULO son aquellos donde uno o varios ciudadanos (PODERDANTES) encomiendan a otro ciudadano o institución (APODERADO) a que se dirijan al registrador de título o institución que corresponda ya sea en la República Dominicana a fin de que retire uno o varios títulos de propiedad del PODERDANTE. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana",
//                          "3-Acto de compra-venta, certificado de título o información específica del inmueble.","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado.","5-Traer una persona como testigo, que no sea familiar, debidamente identificada con cédula de identidad y electoral dominicana y/o pasaporte."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



// ///////////////////////////Acto Notarial Venta/Traspaso/Retiro de Vehículo/////////////////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Venta/Traspaso/Retiro de Vehículo" ,

//                         Descripcion: "Los actos notariales para VENTA o TRASPASO DE VEHÍCULO son aquellos donde uno o varios ciudadanos (PODERDANTES) encomiendan a otro ciudadano (APODERADO) a que proceda a vender o traspasar uno o varios vehículos propiedad del PODERDANTE. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1- Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Copia Certificado de Propiedad o matrícula del vehículo.","4-Información específica de la persona a quien se venderá o traspasará el vehículo (si conoce la información).","5-En caso de que sea para retiro de vehículo debe proveer el nombre del puerto donde se encuentre dicho vehículo"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



// /////////////////////Acto Notarial de Compra en Efectivo/////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial de Compra en Efectivo" ,

//                         Descripcion: "Los actos notariales para COMPRA son aquellos donde un ciudadano o institución (PODERDANTE) apodera a otro ciudadano (APODERADO) para que gestione la COMPRA de un BIEN a favor del PODERDANTE, ante cualquier institución o persona. El bien puede ser mueble e inmueble. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES" ,
//                          "2- Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Información del BIEN a ser comprado (certificado de título de propiedad, descripción exacta incluyendo la ubicación), o por lo menos descripción general del tipo de BIEN que se comprará","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado. Traer una persona como testigo, que no sea familia, debidamente identificada con su cédula de identidad y electoral y/o pasaporte."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//  //////////////////////Acto Notarial de Venta en Efectivo//////////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial de Venta en Efectivo" ,

//                         Descripcion: "Los actos notariales para VENTA son aquellos donde un ciudadano o institución (PODERDANTE) apodera a otro ciudadano o institución (APODERADO) para que gestione la VENTA de un BIEN propiedad del PODERDANTE, a favor de cualquier persona. El bien puede ser mueble e inmueble. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte y/o Cédula de Identidad y Electoral del (los) PODERDANTES;" ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3- Información del BIEN a ser vendido (certificado de título de propiedad, y/o contrato de venta).","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado.","5-Si el poderdante está casado debe comparecer con su cónyuge debidamente identificado con su pasaporte y/o cédula de identidad y electoral.","6-Si el documento de identidad no es el mismo al que aparece en el certificado de título, debe traer además otro documento oficial que pruebe que se trata de la misma persona.","7- Traer una persona como testigo, que no sea familia, debidamente identificada con su cédula de identidad y electoral y/o pasaporte."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos , es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//  /////////////////Acto Notarial Administración de Inmuebles/////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Administración de Inmuebles" ,

//                         Descripcion: "Los actos notariales para ADMINISTRACION DE INMUEBLES son aquellos donde un ciudadano o institución (PODERDANTE) encomienda a otro ciudadano (APODERADO) a que gestione a favor del PODERDANTE bienes inmuebles propiedad del PODERDANTE (alquiler, cobro de renta, reparación desalojo, entre otros).Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la  República Dominicana.",
//                          "3-Copia título de propiedad del o los inmuebles.","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//  /////////////////Acto Notarial para Hipotecas//////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial para Hipotecas" ,

//                         Descripcion: "Los actos notariales para HIPOTECA son aquellos donde un ciudadano (PODERDANTE) encomienda a otro ciudadano o institución (APODERADO) a que gestione a favor del PODERDANTE aspectos relacionados a una HIPOTECA, ya sea en el proceso de solicitarla o de cancelarla ante cualquier institución de la República Dominicana. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES;" ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana",
//                          "3-Copia título de propiedad del o los inmuebles implicados en la hipoteca.","4-Nombre de la entidad bancaria, si la ha seleccionado","5-Traer una persona como testigo, que no sea familiar, debidamente identificada con cédula de identidad y electoral dominicana y/o pasaporte.","6-nformación respecto a cualquier asunto que sea de interés conocer por parte del interesado.","7-Si el poderdante está casado debe comparecer con su cónyuge debidamente identificado con su pasaporte y/o cédula de identidad y electoral."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//  ////////////////////////Acto Notarial de Compra con Financiamiento//////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial de Compra con Financiamiento" ,

//                         Descripcion: "Los actos notariales para COMPRA con financiamiento son aquellos donde un ciudadano (PODERDANTE) apodera a otro ciudadano (APODERADO) para que gestione la COMPRA de un BIEN a favor del PODERDANTE, teniendo el APODERADO que dirigirse a una entidad que financiará la referida compra. En estos casos es necesario que el PODERDANTE presente un BIEN como garantía de pago que por lo general es el mismo inmueble a adquirir. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Información del BIEN a ser comprado (certificado de título de propiedad, descripción exacta, incluyendo la ubicación) y/o contrato de opción de compra.","4-Nombre de la entidad financiera que otorgará el financiamiento","5-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado.","6-Si el poderdante está casado debe comparecer con su cónyuge debidamente identificado con su pasaporte y/o cédula de identidad y electoral.","7-Traer una persona como testigo, que no sea familiar, debidamente identificada con cédula de identidad y electoral dominicana y/o pasaporte."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


// ////////////Acto Notarial para Trámites Bancarios////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial para Trámites Bancarios" ,

//                         Descripcion: "Los actos notariales para TRAMITES BANCARIOS son aquellos donde uno o varios ciudadanos o institución (PODERDANTES) encomienda a otro ciudadano o institución (APODERADO) a que se dirija a una institución financiera (banco, asociación, o cooperativa a, etc.) y realice transacciones respecto a cuentas y/o certificados financieros a nombre del PODERDANTE. Con frecuencia estos préstamos requieren que el PODERDANTE demuestre con bienes que tiene capacidad de pago del préstamo y que ponga algún bien en garantía por el préstamo solicitado. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2- Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana",
//                          "3-Copia de la libreta de banco, número de cuenta, y/o copia de los certificados de depósito y/o financiero.","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });






//     ////////////////////Autorización Gestión de Documentos para Menores (Pasaporte, Visado y Acta)///////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Autorización Gestión de Documentos para Menores (Pasaporte, Visado y Acta)" ,

//                         Descripcion: "Para facilitar la gestión de pasaportes en territorio dominicano, las oficinas consulares dominicanas en el exterior facilitan a los padres y tutores legales este proceso. Todos los ciudadanos tienen derecho a solicitar en las oficinas consulares de la República Dominicana autorizaciones para gestionar pasaportes en la República Dominicana.Cuando se trate de una autorización para retirar pasaportes de menores es suficiente con que firme uno de los padres",

                       
//                         Requisitos:["1- Llevar documento de identidad dominicano (Pasaporte o Cédula de Identidad y Electoral) del autorizante" ,
//                          "2-Acta de Nacimiento del menor.",
//                          "3- Documento de identidad y dirección de la persona que recibirá la Autorización"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"------",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });




//     // ???????????????????????Poderes?????????????????????????????????????

//     /////////////////////Acto Notarial para Adopción/////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial para Adopción" ,

//                         Descripcion: "Los actos notariales para ADOPCIÓN son aquellos donde un ciudadano (PODERDANTE) apodera a otro ciudadano (APODERADO) para que se presente en un Juzgado o instancia que corresponda, a fin de que manifieste la voluntad del PODERDANTE de adoptar a un menor. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Copia Acta de Nacimiento del menor a adoptar (si se conoce la información).","4- Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"$160 dolares",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//     /////////////////////Acto Notarial para Desaduanar Bienes /////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial para Desaduanar Bienes" ,

//                         Descripcion: "Los actos notariales para DESADUANAR BIENES son aquellos donde un ciudadano o institución (PODERDANTE) encomienda a otro ciudadano (APODERADO) a que gestione el retiro de BIENES pertenecientes al PODERDANTE ante la Dirección General de Aduanas de la República Dominicana. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1- Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre y apellido completo, documento de identidad y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Copia factura de los bienes a ser desaduanados (si la tiene)",

//                          "4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"$160 dolares",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//     ///////////////////////////////////Acto de Estipulaciones y Convenciones para el Divorcio por Mutuo Consentimiento//////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto de Estipulaciones y Convenciones para el Divorcio por Mutuo Consentimiento" ,

//                         Descripcion: "(Deben comparecer obligatoriamente ambos esposos). Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.Observaciones:Si existen bienes adquiridos dentro del matrimonio y desean efectuar la partición de los mismos mediante este mismo acto, ambos esposos deben además proporcionar la copia de los certificados, matriculas, cuentas bancarias y/o certificados financieros, etc.",

                       
//                         Requisitos:["1-Cédulas de Identidad y Electoral y/o pasaportes de los esposos divorciantes." ,
//                          "2Acta de Matrimonio",
//                          "3-Actas de Nacimiento de los hijos, si existen.", "4-Nombre, número de Cédula de Identidad y Electoral, estado civil y dirección del abogado que los representará en la         República Dominicana"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"$160 dolares",

            					
//              observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 


// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });
//     //////////////////Acto Notarial de Reconocimiento de Hijos/////////


//     /////////////////////Acto Notarial Divorcio por Mutuo Acuerdo (Sin Estipulaciones)////////////////////

// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Divorcio por Mutuo Acuerdo (Sin Estipulaciones)" ,

//                         Descripcion: "Los actos notariales de DIVORCIO POR MUTUO ACUERDO sin ESTIPULACIONES son aquellos donde una pareja, o uno de los esposos, (PODERDANTES) encomiendan a un abogado, (APODERADO) a que le tramite un DIVORCIO POR MUTUO ACUERDO ante las leyes de la República Dominicana facultando al APODERADO para que redacte el ACTO DE ESTIPULACIONES y CONVENCIONES. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES" ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Copia del Acta de Matrimonio (si la tiene)","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"$160 dolares",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//     /////////////////////////Acto Notarial Divorcio por Incompatibilidad de Caracteres///////////////

// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Divorcio por Incompatibilidad de Caracteres" ,

//                         Descripcion: "Los actos notariales de DIVORCIO POR INCOMPATIBILIDAD DE CARACTERES son aquellos donde uno de los esposos (PODERDANTE) encomienda a un abogado, (APODERADO) a que le tramite un DIVORCIO POR INCOMPATIBILIDAD DE CARACTERES en República Dominicana. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del PODERDANTE." ,
//                          "2-Nombre y apellido completo, documento de identidad y dirección del APODERADO o abogado que lo representará en la República Dominicana.",
//                          "3-Copia del Acta de Matrimonio (si la tiene).","4-Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


    
//     ///////////////////////////////////Poderes Notariales Sobre Inmuebles////////////////////


//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Poderes Notariales Sobre Inmuebles" ,

//                         Descripcion: "La República Dominicana, a través de sus delegaciones consulares en el extranjero, ofrece a todos los ciudadanos servicios de NOTARIO PÚBLICO, a fin de que puedan realizar cualquier actividad o función a ejecutarse bajo las leyes de la República Dominicana y para las cuales dichos documentos sean imprescindibles. En ese sentido los dominicanos y extranjeros que requieran que otra persona (APODERADO) actúe en su nombre en la República Dominicana. A fin de poder realizar diligencias como si fuera el PODERDANTE, puede acudir a las oficinales consulares dominicanas para la redacción de dicho documento.Nota: Todos los ciudadanos (nacionales o extranjeros) tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.pasaporte en vigor y requieran viajar a la República Dominicana. Este documento se expide por una validez de 30 días única y exclusivamente para regresar a la República Dominicana. A efectos de poder volver al país en donde se le otorgó el pasaporte provisional el ciudadano dominicano deberá gestionar en territorio dominicano la obtención del pasaporte. Todo ciudadano dominicano tiene derecho a solicitar en las oficinas consulares de la República Dominicana un pasaporte provisional o carta de ruta.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

            					
//              observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



    
    
//     //////////////////////////Acto Notarial Traspaso Arma de Fuego///////////////
//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial Traspaso Arma de Fuego" ,

//                         Descripcion: "Los actos notariales para TRASPASO de ARMA de FUEGO son aquellos donde uno o varios ciudadanos (PODERDANTES) encomiendan a otro ciudadano o institución (APODERADO) a que se dirija a las instituciones que sean requeridas en la República Dominicana a fin de que solicite que un arma de fuego propiedad del PODERDANTE sea traspasada a otra persona o institución. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana.",

                       
//                         Requisitos:["1-Pasaporte y/o cédula de identidad y electoral del PODERDANTE" ,
//                          "2-Nombre completo y número de cédula de identidad y electoral del APODERADO.",
//                          "3-Copia de Licencia para el Porte y Tenencia de Arma de Fuego","5-Información específica de la persona a quien se traspasará el arma (si conoce la información). e. Información respecto a cualquier asunto que sea de interés conocer por parte del interesado"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

   

   

   

//     /////////////////////////Acto Notarial de Desalojo/////////////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Acto Notarial de Desalojo " ,

//                         Descripcion: "Los actos notariales para DESALOJO son aquellos donde un ciudadano (PODERDANTE) encomienda a otro ciudadano (APODERADO) a que inicie el proceso de desalojo de un inmueble de su propiedad en la República Dominicana. Todos los ciudadanos tienen derecho a gestionar actos notariales en las oficinas consulares de la República Dominicana",

                       
//                         Requisitos:["1-Pasaporte o Cédula de Identidad y Electoral del (los) PODERDANTES." ,
//                          "2-Nombre completo, cédula de identidad y electoral y dirección del APODERADO o persona que lo representará en la República Dominicana.",
//                          "3-Copia título de propiedad de los bienes sujetos a orden de desalojo. Información respecto a cualquier asunto que sea de interés conocer por parte del interesado","4-Traer una persona como testigo, que no sea familiar, debidamente identificada con cédula de identidad y electoral dominicana y/o pasaporte."],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

   

    




//     // ???????????DECLARACIONES JURADAS???????????????????

//     ////////////////DECLARACIÓN JURADA DE ESTADO CIVIL///////


//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "DECLARACIÓN JURADA DE ESTADO CIVIL" ,

//                         Descripcion: "Las Declaraciones Juradas de Estado Civil tienen el objetivo de que los ciudadanos dominicanos o de otro país puedan indicar a las autoridades de cualquier país o institución, el estatus civil al momento de la declaración. Con frecuencia este servicio es demandado cuando el ciudadano se está preparando para contraer matrimonio o para algún acto y carece de la posibilidad (poco tiempo; ha vivido fuera de la República Dominicana varios años; ha vivido en otros países pero no puede demostrar con documentos de esos países su estado civil; etc.) para demostrar a satisfacción su estado civil.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//     ////////////////////////Declaracion Jurada de No Ingrsos////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Declaración Jurada de No Ingreso" ,

//                         Descripcion: "Las Declaraciones Juradas de No Ingreso tienen el objetivo de permitir que cualquier ciudadano pueda indicar a las autoridades de otro país o de cualquier institución, que en los momentos actuales no percibe ningún tipo de ingreso ni del gobierno dominicano, ni procedente de ninguna herencia, ni procedente de ninguna inversión personal, ni procedente de pariente alguno, ni de ninguna fuente de ingreso. Con frecuencia este servicio es demandado por ciudadanos dominicanos quienes están gestionando subsidios o ayudas públicas en los países donde se encuentran, pero las instituciones de dichos países requieren constancia de que el Declarante no dispone de otras fuentes de ingresos.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                    other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 
//     function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//   /////////////////////////////Declaración Jurada de Domicilio////////////////////////// 
//   dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Declaración Jurada de Domicilio" ,

//                         Descripcion: "Las Declaraciones Juradas de Domicilio tienen el objetivo de que los ciudadanos dominicanos y de cualquier otro país puedan indicar a las autoridades de cualquier país o institución, dónde han estado residiendo en un determinado período de tiempo. Con frecuencia este servicio es demandado porque en la República Dominicana no existe un sistema de empadronamiento a nivel nacional que pueda certificar donde ha vivido con exactitud un ciudadano cuando ha residido en territorio dominicano.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                  other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 

// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//     //////////////////////Declaración Jurada de Pérdida de Documento////////////////

// dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Declaración Jurada de Pérdida de Documento" ,

//                         Descripcion: "Las Declaraciones Juradas de Pérdida de Documento tienen el objetivo de que los ciudadanos dominicanos o extranjero puedan notificar a la oficina consular dominicana la pérdida de un documento de identidad de su pertenencia. Con frecuencia esta declaración es útil cuando un ciudadano no puede hacer una denuncia ante la policía local sobre la p��rdida de un documento, enterando a la oficina consular de tal hecho de forma tal que pueda utilizar dicha Declaración para solicitar un nuevo documento o para que la Oficina Consular le remita el documento a su domicilio si dicho documento es reportado como encontrado.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             					 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     }, 


// function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//     ///////////////////////////////////Declaración Jurada de Ingresos///////////

//     dbLegal.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Declaración Jurada de Ingresos" ,

//                         Descripcion: "Las Declaraciones Juradas de Ingresos tienen el objetivo de que los ciudadanos dominicanos o de otro país, puedan indicar a cualquier institución ya sea financiera o de otra naturaleza, todos los ingresos económicos que reciben en promedio al mes. Con frecuencia este servicio es demandado cuando el ciudadano ha solicitado un crédito en la República Dominicana u otro país y no puede demostrar con documentación la capacidad de pago de que dispone. La Oficina Consular tomará una declaración al ciudadano donde consten los ingresos y los gastos, de forma tal que se pueda inferir el dinero de que dispone el ciudadano para gastos no comprometidos.",

                       
//                         Requisitos:["1-" ,
//                          "2-",
//                          "3-"],


//                           RequisiImg:[],
                                   
//                           Pasos:"",
                 
//                  		tiempo:"",

//             			costo:"",

//             						 observaciones:"Para mejorar la calidad de los servicios y agilizar los procesos, es importante traer todos sus documentos debidamente de forma fisica (IMPRESO)",
//                                   other:"Nota: Este documento debe de ser legalizado en la Cancilleria de Republica Dominicana"
             
         
//     },
    
    
    
//     function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


app.use(express.static(__dirname + "/public"));


router.get("/legal", function(req , res){
   dbLegal.find({}, function(err , legal){
        if(err){
            console.log(err);
            
        }else{
              res.render("serviceLegal", {legal:legal});
        }
    
});

    
});






router.get("/legal/:id", function(req , res){
   dbLegal.findById(req.params.id, function(err , fPasaporte){
        if(err){
            console.log(err);
            
        }else{
              res.render("progressno.ejs", {fPasaporte:fPasaporte});
        }
    
});

    
});







module.exports = router;