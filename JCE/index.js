
const fs = require("fs");
const csv = require("csv-parser");
var csvWriter = require('csv-write-stream')
var writer = csvWriter({ headers:false})
const _ = require('lodash');
const textVersion = require("textversionjs");


const axios = require('axios');
const { Console } = require("console");
const Url =' https://elecciones2020.do/API/HoneyModules/FrontEnd/EventHandler?hfEventId=21&TabId=46&language=en-US&'

let dat = [];
let save = {
    CEDULA:'',
    NOMBRE:'',	
    APELLIDO1:'',
    APELLIDO2:'',
    FECHADENACIMIENTO:'',
    DIRECCION1:'',
    DIRECCION2:'',
    TELEFONO:'',
    DondeVota:[]

};



let cedular = ["01300400106","03100276736" ];






const Search = async (cedula) => {

   
   try {
    const info = await axios.post(Url,
        {"Cedula":cedula,"Terms":false}, { 
            headers: {
            'Content-Type': 'application/json',
            Cookie:'dnn_IsMobile=False; language=en-US; .ASPXANONYMOUS=D7ddV50bkmdgpmPBwQ8untZESfo_IsYpTmou2eYil80PL2UiDiml_NJQ6fUl1pvd_2IfQ6EQo1KLvSDnW78LkoMwBXhaNyauDQ0g3ZdnVE5muycO0; __RequestVerificationToken=qMH9JlenolMOyv2CS_yMVXX4qwvjaSI0tbZLR7B-3PpgpEh4b29uH1AYVXQEG77GuF9V6A2; _ga=GA1.2.1023104244.1591912800; _gid=GA1.2.2004954694.1592044748'
            ,
             moduleid:427,
             requestverificationtoken:'utUWdHSmebxsaNPJ7JqTT3mV3zKpaAr0pA5BU0xtPH9kJH10VDUJo5Z2YG8kqhn9jeVIVg2'
        }}

    )

    return info.data[2].messageTemplate;
       
   } catch (err) {
       console.error(err);
       
   } 



}




const mapping =  (event) => {

    event.map( async ced => {
        console.log(ced)


    //    const data = await  Search(ced.CEDULA);
    //    const info = textVersion(data);
    //    if (info.indexOf('OCLEE') > 0){
    //        console.log(info)

    //    }
       
    })

}











const multi =   async () => {

    writer.pipe(fs.createWriteStream('out.csv' , {flags: 'a'}))

 await fs.createReadStream("passpor2.csv").pipe(csv()).on("data",  row => {

        if(row.CEDULA === 'NULL'){
            return;
        }else{
            

            dat.push(row);
            
           
        //    dat = {
        //     CEDULA:row.CEDULA
        //     ,NOMBRE: row.NOMBRE
        //     ,APELLIDO1: row.APELLIDO1,
        //     APELLIDO2:row.APELLIDO2,
        //     FECHADENACIMIENTO: row.FECHADENACIMIENTO,
        //     DIRECCION1:row.DIRECCION1,
        //     DIRECCION2: row.DIRECCION2,
        //     TELEFONO:row.TELEFONO

        //    }

          
        //    writer.write(dat)
        


            
    
        

        }


      }).on("end",  () => {
          

        
           
            dat.map(  async e => {

                
                const data = await  Search(e.CEDULA);
                const info = textVersion(data);
                if (info.indexOf('OCLEE') > 0){
                   
                    
                          
                    save = {
                        CEDULA:e.CEDULA,
                        NOMBRE: e.NOMBRE,	
                        APELLIDO1:e.APELLIDO1,
                        APELLIDO2:e.APELLIDO2,
                        FECHADENACIMIENTO: e.FECHADENACIMIENTO,
                        DIRECCION1:e.DIRECCION1,
                        DIRECCION2:e.DIRECCION2,
                        TELEFONO:e.TELEFONO,
                        DondeVota: info.replace(/\r?\n/g,' , ')
                    
                    };

                    await writer.write(save)


                
                       }
            })



        
            


       
      })


};






multi();
