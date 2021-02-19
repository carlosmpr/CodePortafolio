const Appoinments = require(".././model/createApoinment");
const nodemailer = require("nodemailer");
let hour = ""
const checkHours = (value) =>{
switch(value){
  case 9:
     hour ="9:00am - 10:00am";
     break;

     case 10:
      hour ="10:00am - 11:00am";
      break;


      case 11:
     hour ="11:00am - 12:00am";
     break; 

     case 12:
      hour ="12:00am - 1:00pm";
      break;

      case 1:
        hour ="1:00pm - 2:00pm";
        break;

        case 2:
          hour ="2:00pm - 3:00pm";
          break;
  default:
    hour = "Debe Volver hacer la cita"
}
}



const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
module.exports = {
  Buscar: async (args) => {
    console.log(new Date(args.buscar).toLocaleDateString())

    try {
      const citas = (await Appoinments.find({date: args.buscar}));
      return citas.map((cita) => cita);
    } catch (err) {
      throw err;
    }
  },

  createCita: async (args) => {

  
    const cita = new Appoinments({
      Name: `${args.create.Name}`,
      phone: args.create.phone,
      email: args.create.email,
      date: args.create.date,
      servicio: args.create.servicio,
      departamento: args.create.departamento,
      value: args.create.value,
      code:Date.now()
    });

  

    try {
      await cita.save();
      let Book = {
        date: cita.date,
        value: cita.value,
      };

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "citaconsuladony@gmail.com",
          pass: "1501@Broadway"
        }
      });



      checkHours(args.create.value);


      var mailOptions = {
        from: "onlineCarib@outlook.com",
        to: args.create.email ,
        subject: `Cita para el Consulado Dominicano en NY`,
        html: `
        <html>
<head>
    <meta charset="utf-8">
    <title>A simple, clean, and responsive HTML invoice template</title>
    
    <style>
    .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }
    
    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
    }
    
    .invoice-box table td {
        padding: 5px;
        vertical-align: top;
    }
    
    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }
    
    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
    }
    
    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }
    
    .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
    }
    
    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }
    
    .invoice-box table tr.item.last td {
        border-bottom: none;
    }
    
    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }
        
        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
    
    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }
    
    .rtl table {
        text-align: right;
    }
    
    .rtl table tr td:nth-child(2) {
        text-align: left;
    }
    </style>
</head>

<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="http://www.consuladord-ny.net/LOGO%20CONSULADO%20Estados%20Unidos-01.png" style="width:50%; max-width:300px;">
                            </td>
                            
                            <td>
                                Numero de Registro: <span style="font-weight:700">${cita.code}</span><br>
                                Fecha: ${new Date().toLocaleDateString()}
                                
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                Consulado Dominicano NY<br>
                                1501 Broadway suite410<br>
                                New York,NY ,10036
                            </td>
                            
                            <td>
                               ${cita.Name}<br>
                               ${cita.phone}<br>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                    Informacion de la Cita
                </td>
                
                <td>
                   Fecha
                </td>
            </tr>
            
            <tr class="details">
                <td>
                   Fecha
                </td>
                
                <td>
                ${new Date(args.create.date).toLocaleDateString()}
                </td>
            </tr>

            
            <tr class="heading">
                <td>
                   Hora
               
                             </td>
            </tr>
            
            <tr class="details">
                
                <td>
                ${hour}
                </td>
            </tr>
            
            <tr class="heading">
                <td>
                   Servicio
                </td>
                
                <td>
                   Departamento
                </td>
            </tr>
            
            <tr class="item">
                <td>
                ${args.create.servicio}
                </td>
                
                <td>
                ${args.create.departamento}
                </td>
            </tr>
            
           
            
          
  
        </table>
    </div>
</body>
</html>
        
        `
      };




      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return Book;
    } catch (err) {
      throw err;
    }
  },
};
