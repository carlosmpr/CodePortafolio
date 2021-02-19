const expreess = require("express");
const app = expreess();
const fs = require("fs");
const csv = require("csv-parser");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const path = require("path");
const secure = require("express-force-https");

app.use(secure);
app.use(expreess.static("build"));

require("./models/online");
//////

app.get("*", function(request, response) {
  response.redirect("https://" + request.headers.host + request.url);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Hello, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    //Exit process if failed
    process.exit(1);
  }
};

connectDB();

const User = mongoose.model("users");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://www.crdny.com"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.post("/data", async (req, res) => {
  let dat = [];

  if (!req.body.cedula) {
    return res
      .status(422)
      .send({ error: "el campo no puede estar en blanco " });
  }

  if (req.body.cedula.length > 11) {
    return res.status(422).send({ error: "numero de cedula invalido" });
  }
  await fs
    .createReadStream("ages.csv")
    .pipe(csv())
    .on("data", row => {
      if (row.CEDULA === req.body.cedula) {
        dat.push(row);
      }
    })
    .on("end", () => {
      if (dat.length > 0) {
        res.send(dat);
      } else {
        res.status(400).send({ error: "cedula no encontrada" });
      }
    });
});

app.post("/pay", async (req, res) => {
  let ced;

  if (!req.body.Expediente[0].CEDULA) {
    return res.status(422).send({ error: "Error1" });
  }

  await fs
    .createReadStream("ages.csv")
    .pipe(csv())
    .on("data", row => {
      if (row.CEDULA === req.body.Expediente[0].CEDULA.toString()) {
        ced = row.CEDULA;
      }
    })
    .on("end", () => {
      if (ced === req.body.Expediente[0].CEDULA.toString()) {
        const user = new User({
          user: {
            name: req.body.Expediente[0].NOMBRE,
            surname: req.body.Expediente[0].APELLIDO,
            cedula: req.body.Expediente[0].CEDULA.toString(),
            expediente: req.body.Expediente[0].EXPEDIENTE,
            direccion: [
              req.body.address.address_line_1,
              req.body.address.address_line_2,
              req.body.address.admin_area_2,
              req.body.address.admin_area_1,
              req.body.address.postal_code
            ]
          }
        });

        user.save();
        res.status(200).send("ok");
      } else {
        res.status(400).send({ error: "error" });
      }
    });
});
app.listen(process.env.PORT || 5000);
