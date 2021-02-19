var express = require("express");
var router = express.Router();
var dbPasaporte = require("../models/pasaporte");
var app= express();


// // ////////////////Renovacion de Pasaporte Mayores de Edad por Vencimiento//////////////////////////
// dbPasaporte.create(

//         {
        
             
           
             
            
//                         name: "Renovación de Pasaporte para mayores de edad por vencimiento." ,

//                         Descripcion: "Renovación de Pasaporte para mayores de 18 años con la libreta de pasaporte vencida.Recuerde que el nombre en el pasaporte será igual al nombre como aparece en la cédula, no como está en la libreta anterior",

                       
//                         Requisitos:[" 1-Cédula de identidad y electoral nuevo Formato Biométrico.","2-Acta de Nacimiento Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana).",

//                          "3-Libreta de Pasaporte Vencida",
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.","5-Prueba de dirección de los Estados Unidos (Una Carta o ID del Estado)" ,"6-La información en el Acta de Nacimiento y cédula deben coincidir(Nombres, Apellidos , Fecha de Nacimiento)"],


//                           RequisiImg:["/cedula.png","/actacom.png","/pasaporte.png","/foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"5 a 7 días laborables , VIP 1 a 3 días laborables",

//                         costo:"Regular: $135 dólares , VIP: $165 dólares",

//                         observaciones:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que hacer filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio.",

//                         other:""
             
             
         
    
//         }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//     ////////////////Renovacion de Pasaporte por Perdiada(Mayores de Edad)////////


// dbPasaporte.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Renovación de Pasaporte por pérdida para mayores de edad" ,

//                         Descripcion: "Renovacián de Pasaporte para mayores de 18 años por pérdida de la libreta de Pasaporte. Recuerde que el nombre en el pasaporte será igual al nombre como aparece en la cédula, no como está en la libreta anterior ",

                       
//                         Requisitos:["1-Reporte policial (donde se detalla la pérdida del documento)." ,"2-Cédula de identidad y electoral nuevo Formato Biométrico." ,"3-Acta de Nacimiento Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana).",

                         
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.",
//                          "5-Prueba de dirección de los Estados Unidos (Una Carta o ID del Estado)" ,"6-La información en el Acta de Nacimiento y cédula deben coincidir(Nombres, Apellidos , Fecha de Nacimiento)"],


//                           RequisiImg:["","../cedula.png","../actacom.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasosperdida.png",
                 
//                         tiempo:"entre 15 días o mas , no VIP",

//                         costo:"$170 dólares",

//                         observaciones:"La Dirección General de Pasaporte de la República Dominicana ha tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la Ventanilla de la Dirección General de Pasaporte (DGP)",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio"
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//   //////////////////////Renovacion de Pasaporte por Deterioro(Mayores de Edad)//////

// dbPasaporte.create(



//  {
        
             
           
             
            
//                         name: "Renovación de pasaporte por deterioro de la libreta para mayores de edad",

//                         Descripcion: "Renovación de pasaporte para mayores de 18 años por deterioro de la libreta de pasaporte (rotura, tachadura o quemadura).. Recuerde que el nombre en el pasaporte será igual al nombre como aparece en la cédul, no como está en la libreta anterior.",

                       
//                         Requisitos:["1-Cédula de identidad y electoral nuevo Formato Biométrico" ,"3-Acta de Nacimiento Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana).",

//                          "4-Libreta de Pasaporte Deteriorada",
//                          "5-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.","6-Prueba de dirección de los Estados Unidos (Una Carta o ID del Estado)" ,"7-La información en el Acta de Nacimiento y cédula deben coincidir(Nombres, Apellidos , Fecha de Nacimiento)"],


//                           RequisiImg:["../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"Entre 15 días laborables o mas , VIP: no tienes",

//                         costo:"Regular: $170 dólares , VIP: No tiene",

//                         observaciones:"La Dirección General de Pasaporte de la República Dominicana ha tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la Ventanilla de la Dirección General de Pasaporte (DGP).",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
    
//   }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//     /////////Renovacion de  Pasaporte por  Vencimiento(Menores de Edad)//////
    
//     dbPasaporte.create(
//         {

//     name: "Renovación de pasaporte menores de edad por vencimiento." ,

//                         Descripcion: "Renovación de Pasaporte para menores de 18 años y con la libreta de pasaporte vencida. Uno de los padres o tutor LEGAL debe de acompañar al menor de edad.",

                       
//                         Requisitos:[

//                         "1-El menor de Edad debe estar presente, con uno de los Padres o Tutor Legal",

//                         "2-Cédula de identidad y electoral nuevo Formato Biométrico del Padre o tutor Legal que Acompaña al menor de edad." ,

//                         "3-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la Republica Dominicana)",

//                          "4-Libreta de Pasaporte Vencida",
//                          "5-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles." ],


//                           RequisiImg:["","../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"5 a 7 dias laborables , VIP: no tiene",

//                         costo:"Regular: $148 dolares , VIP:no tiene dolares",

//                         observaciones:"El padre o tutor legal , deberá firmar la Carta de autorización de menor exigida , por la Dirección General de Pasaporte.",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."


// }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


// /////////////Renovacion de Pasaporte por Perdiada(Menores de Edad)/////

// dbPasaporte.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Renovación de Pasaporte por pérdida para menores de edad" ,

//                         Descripcion: "Renovación de Pasaporte para menores de 18 años y con la libreta de pasaporte vencida. Uno de los padres o tutor LEGAL debe de acompañar al menor de edad.",

                       
//                         Requisitos:["1-Un reporte policial (donde se detalla la pérdida del documento).", 

//                         "2-El menor de Edad deberá estar presente , acompañado  de los Padres o Tutor Legal.",

//                         "3-Cédula de identidad y electoral nuevo formato biométrico del Padre o tutor Legal que acompaña al menor de edad.",

//                                 "4-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada si proviene de la República Dominicana)",

                         
//                          "5-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.",
//                          "6-Prueba de dirección de los Estados Unidos (carta con su dirección o ID del estado)" ],

                         

//                           RequisiImg:["","","../cedula.png","../actacom.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasosperdida.png",
                 
//                         tiempo:"entre 15 días o más. Deberán ser aprobadas en la Dirección General de Pasaporte, NO VIP.",

//                         costo:"$183 dólares",

//                         observaciones:"La Dirección General de Pasaporte ha tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP)..El padre o tutor legal, deberá firmar la Carta de autorización de menor exigida, por la dirección general de pasaporte. ",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//   /////Renovacion de Pasaporte por Deterioro(Menores de Edad)//////


// dbPasaporte.create(
//   {
        
             
           
             
            
//                         name: "Renovación de pasaporte por deterioro para menores de edad" ,

//                         Descripcion: "Renovación de Pasaporte para menores de 18 años por Deterioro de la Libreta (rotura, tachadura o quemadura).",

                       
//                         Requisitos:["1-El menor de Edad deberá estar presente , acompañado  de los Padres o Tutor Legal.",
//                         "2-Cédula de identidad y electoral nuevo formato biométrico del Padre o tutor Legal que acompaña al menor de edad." ,

//                         "3-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada si proviene de la República Dominicana).",

//                          "4-Libreta de Pasaporte Deteriorada",
//                          "5-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.",
                    // "6-Prueba de dirección de los Estados Unidos (carta con su dirección o ID del estado)" ],


//                           RequisiImg:["","../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:":  15 días o más. Deberán ser aprobadas en la Dirección General de Pasaporte, NO VIP.",

//                         costo:"Regular: $183 dólares , VIP: No tiene",

//                         observaciones:"La Dirección General de Pasaporte ha tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP).",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//   }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//     /////Renovacion de Pasaporte con el Apellido de Casada////////
// dbPasaporte.create(
//     {
        
             
           
             
            
//                         name: "Renovación de Pasaporte con el Apellido de Casada por Vencimiento" ,

//                         Descripcion: "Renovación de pasaporte para mayores de 18 años, con la libreta de pasaporte vencida y desean tener el apellido del esposo en el pasaporte dominicano.",

                       
//                         Requisitos:["1-Cédula de identidad y electoral nuevo formato biométrico, con el apellido del Esposo." ,

//                         "2-Acta de Nacimiento Original e Inextensa del 2012 hasta la fecha (Legalizada si proviene de la República Dominicana).",

//                          "3-Libreta de Pasaporte Vencida",
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.","5- Prueba de dirección (carta con su dirección o ID del estado)" ,"6-La información en el Acta de Nacimiento como en la cédula deben coincidir (Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"5 a 7 días laborables , VIP 1 a 3 días laborables",

//                         costo:"Regular: $135 dólares , VIP: $165 dólares",

//                         observaciones:"",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
    
    

//   }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//     ///////////////Renovacion de Pasaporte por Perdiada(con el Apellido de Casada///////////
// dbPasaporte.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Renovación de pasaporte por pérdida con el apellido de casada" ,

//                         Descripcion: "Renovación de pasaporte para mayores de 18 años, con la libreta de pasaporte perdida y desean tener el apellido del Esposo en el pasaporte dominicano.",

                       
//                         Requisitos:["1-Un reporte policial (donde se detalla la pérdida del documento).",

//                         "2-Cédula de identidad y electoral nuevo formato biométrico, con el apellido del Esposo.",

//                                 "3-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana)",

                      
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.",
//                          "5-Prueba de dirección de los Estados Unidos (carta con su dirección o ID del estado)" ,

//                          "6-La información en el Acta de Nacimiento así  como en la cédula deben Coincidir (Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["","../cedula.png","../actacom.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasosperdida.png",
                 
//                         tiempo:"entre 15 días o mas , no VIP",

//                         costo:"$170 dólares",

//                         observaciones:"La Dirección General de Pasaporte a tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP).",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//   //////////////////////Renovacion de Pasaporte por Deterioro(con el Apellido de Casada)//////

// dbPasaporte.create(



//  {
        
             
           
             
            
//                         name: "Renovación de pasaporte por deterioro con el apellido de casada" ,

//                         Descripcion: "Renovación de Pasaporte para mayores de 18 años, por deterioro de la Libreta (rotura, tachadura o quemadura) y desean tener el apellido del esposo en la libreta de pasaporte. ",

                       
//                         Requisitos:["1-Cédula de identidad y electoral nuevo formato biométrico, con el apellido del Esposo." ,

//                         "2-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana)",

//                          "3-Libreta de Pasaporte Deteriorada",
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.","5-Direccion de los Estados Unidos (carta con su dirección o ID del estado)" ,"6-La información en el Acta de Nacimiento como en la cédula deben coincidir (Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"15 días laborables o mas , VIP: no tienes",

//                         costo:"Regular: $170 dólares , VIP: No tiene",

//                         observaciones:"La Dirección General de Pasaporte a tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP). ",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//  }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });


//      //     /////Renovacion de Pasaporte sin el Apellido de Casada////////
// dbPasaporte.create(
//     {
        
             
           
             
            
//                         name: "Renovación de Pasaporte sin el Apellido de Casada por Vencimiento" ,

//                         Descripcion: "Renovación de pasaporte para mayores de 18 años, con la libreta de pasaporte vencida y no desean tener el apellido del Esposo en el pasaporte dominicano.",

                       
//                         Requisitos:["1-Cédula de identidad y electoral nuevo formato biométrico, sin el apellido del Esposo." ,

//                         "2-Acta de Nacimiento Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana).",

//                          "3-Libreta de Pasaporte Vencida",
//                          "4-No es necesario traer fotos, éstas son tomadas en el Consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles.","5-Prueba de dirección de los Estados Unidos (carta con su dirección o ID del estado)" ,"6-La información en el Acta de Nacimiento como en la cédula  deben coincidir (Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"5 a 7 días laborables , VIP 1 a 3 días laborables",

//                         costo:"Regular: $135 dólares , VIP:$165 dólares",

//                         observaciones:"",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
    
    

//   }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });

//     ///////////////Renovacion de Pasaporte por Perdiada(sin el Apellido de Casada///////////
// dbPasaporte.create(
    
   
   
//     {
        
             
           
             
            
//                         name: "Renovación de pasaporte por pérdida sin el apellido de casada" ,

//                         Descripcion: "Renovación de pasaporte para mayores de 18 años, con la libreta de pasaporte perdida y no desean tener el apellido del esposo en el pasaporte dominicano.",

                       
//                         Requisitos:["1-Un reporte policial (donde se detalla la pérdida del documento).",

//                         "2-Cédula de identidad y electoral nuevo formato biométrico, sin el apellido del Esposo.",

//                                 "3-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana)",

                      
//                          "4-No es necesario Traer fotos estas son tomadas en el consulado y no se permite ningún tipo de arete, frente despejada y orejas visibles",
//                          "5-Prueba de dirección de los Estados Unidos (carta con su dirección o ID del estado)" ,

//                          "6-La información en el Acta de Nacimiento como en la cédula deben coincidir (Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["","../cedula.png","../actacom.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasosperdida.png",
                 
//                         tiempo:"entre 15 días o mas , no VIP",

//                         costo:"$170 dólares",

//                         observaciones:"La Dirección General de Pasaporte a tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP).",

//                         other:"Uno de los beneficios de  solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//     }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });



//   //////////////////////Renovacion de Pasaporte por Deterioro(sin el Apellido de Casada)//////

// dbPasaporte.create(



//  {
        
             
           
             
            
//                         name: "Renovación de pasaporte por deterioro sin el apellido de casada" ,

//                         Descripcion: "Renovación de Pasaporte para mayores de 18 años, por deterioro de la Libreta (rotura, tachadura o quemadura) y no desean tener el apellido del esposo en la libreta de pasaporte. ",

                       
//                         Requisitos:["1-Cédula de identidad y electoral nuevo formato biométrico, sin el apellido del Esposo." ,

//                         "2-Acta de Nacimiento del menor de edad, Original e Inextensa del 2012 hasta la fecha (Legalizada Si proviene de la República Dominicana)",

//                          "3-Libreta de Pasaporte Deteriorada",
//                          "4-No es necesario traer fotos estas son tomadas en el consulado y no se Permite ningún tipo de arete, frente despejada y orejas visibles","5-Prueba de dirección de los Estados Unidos  (carta con su dirección o ID del estado)" ,"6-La información en el Acta de Nacimiento Como en la como en la cédula(Nombres, Apellidos, Fecha de Nacimiento)"],


//                           RequisiImg:["../cedula.png","../actacom.png","../pasaporte.png","../foto-pasaporte-mexico.jpg"],
                                   
//                           Pasos:"../pasos para realizar la renovacion.jpg",
                 
//                         tiempo:"15 días laborables o mas , VIP: no tienes",

//                         costo:"Regular: $170 dólares , VIP: No tiene",

//                         observaciones:"La Dirección General de Pasaporte a tomado las siguientes resoluciones para los casos de pérdida o deterioro de libreta, la cual se deberá pagar una penalidad dependiendo de la Cantidad de pérdidas o deterioros que tenga cada persona. Esta penalidad deberá ser pagada en la ventanilla de la Dirección General de Pasaporte (DGP). ",

//                         other:"Uno de los beneficios de solicitar una cita para renovar su pasaporte  en el Consulado General de la República Dominicana en la ciudad de Nueva York vía internet, es que no tendrá que incurrir en filas ni esperar para ser atendido. Solo deberá cumplir con los requisitos del servicio."
             
             
         
//  }, function(err, newlyCreated){
      
//       if(err){
//           console.log(err);
          
//       }else{
         
//       }
//   });




app.use(express.static(__dirname + "/public"));


router.get("/pasaporte", function(req , res){
   dbPasaporte.find({}, function(err , Pasaporte){
        if(err){
            console.log(err);
            
        }else{
              res.render("services", {Pasaporte:Pasaporte});
        }
    
});

    
});



router.get("/formulariopasaporte", (req , res) => {
    res.render("formulario")
})

router.get("/pasaporte/:id", function(req , res){
   dbPasaporte.findById(req.params.id, function(err , fPasaporte){
        if(err){
            console.log(err);
            
        }else{
              res.render("progress", {fPasaporte:fPasaporte});
        }
    
});

    
});







module.exports = router;