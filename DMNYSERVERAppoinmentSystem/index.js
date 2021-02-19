const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const graphqlHttp = require("express-graphql");
const graphQlSchema = require("./graphql/Schema");
const graphQlResolver = require("./graphql/Resolvers");
const path = require('path')
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.get("*", function(request, response) {
//   response.redirect("https://" + request.headers.host + request.url);
// });
app.use(
  "/graphql",
  graphqlHttp.graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolver,

    graphiql: true,
  })
);





app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});


app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "build/index.html"));
});



const serverStart = async () => {
  await mongoose.connect(
    process.env.db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  app.listen(process.env.PORT || 5000);
};

serverStart();
